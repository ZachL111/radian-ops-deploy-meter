# radian-ops-deploy-meter

`radian-ops-deploy-meter` is a compact JavaScript repository for automation, centered on this goal: Develop a JavaScript command-oriented project for deploy scenarios with safe and unsafe fixtures, remediation hints, and single-node deterministic mode.

## Use Case

The project exists to keep a narrow engineering decision visible and testable. For this repo, that decision is how dry-run spread and operator cost should influence a review result.

## Radian Ops Deploy Meter Review Notes

Start with `dry-run spread` and `rename risk`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## Highlights

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/radian-ops-deploy-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `rename risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Future Work

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
