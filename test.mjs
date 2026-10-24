import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {run,execute} from './run.mjs';import {run as browserRun} from './browser.mjs';const cases=JSON.parse(fs.readFileSync(new URL('./cases.json',import.meta.url)));// Dot paths use the longest remaining literal object key, allowing filenames.
function getPath(value,path){
  const parts=path.split('.');let current=value;
  while(parts.length){if(current==null)return undefined;const rest=parts.join('.');if(Object.hasOwn(Object(current),rest))return current[rest];current=current[parts.shift()];}return current;
}
function project(result,expect){return Object.fromEntries(Object.keys(expect).map(path=>[path,getPath(result,path)]));}

for(const f of cases){test(f.name,()=>{const input=structuredClone(f.input),result=run(input);assert.deepEqual(project(result,f.expect),f.expect);assert.deepEqual(input,f.input);assert.match(execute(input).input_sha256,/^[0-9a-f]{64}$/);});test('Browser parity: '+f.name,()=>assert.deepEqual(browserRun(structuredClone(f.input)),run(structuredClone(f.input))));}test('Missing input rejects',()=>assert.throws(()=>run({})));
