# Trace reconstruction

뒤섞인 분산 추적 span을 시간순으로 정리하고 부모·중복·경계 오류를 찾는다.

A focused executable resource for AI-assisted structured work. **Zero runtime dependencies, no API key, Node.js 22+.**

[Live workspace](https://proofnova.github.io/trace-reconstruction/) · [한국어 리소스 모음](https://proofnova.github.io/) · [Task contract](resource.json) · [Prior art](RESEARCH.md)

```sh
git clone https://github.com/proofnova/trace-reconstruction.git
cd trace-reconstruction
npm test
node cli.mjs example.json
```

## What it does

Offset-normalized nesting checks and sweep-line parallel-span counts.

Parent/child duration is not double-counted as wall latency; zero-duration spans do not inflate concurrency.

## Connect a model

Import `execute` from `./run.mjs`. Expose this declared tool to your model, validate its tool name/input contract, execute it, and retain the returned JSON and input digest. Calculations and constraint checks are performed by the resource. No paid model or new agent framework is required.

[SKILL.md](SKILL.md) contains the workflow, interpretation and recovery procedure. [example.json](example.json) is a complete input; [cases.json](cases.json) contains worked and held-out synthetic checks. The website executes the same code locally in a bounded Worker. It has no model or external data upload.

## Recovery and limits

Restore missing parents or correct clocks; distinguish observed anomalies from inferred root cause.

Underlying algorithms and task outcomes already exist in the alternatives. An existing tool configured for this exact task may remove the need for a separate project. Small synthetic tests cannot establish broad expertise or external demand. See [RESEARCH.md](RESEARCH.md). A plan/audit is not an external action or proof of actual user benefit.

## Contribute

Open an issue with a synthetic/redacted failing JSON input, expected result and Node version. Add a regression test and run `npm test`. Never include credentials or real private records in public examples.

MIT · Proofnova · 2026
