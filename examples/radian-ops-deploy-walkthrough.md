# Radian Ops Deploy Meter Walkthrough

This note is the quickest way to read the extra review model in `radian-ops-deploy-meter`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 143 | ship |
| stress | rename risk | 92 | hold |
| edge | operator cost | 188 | ship |
| recovery | idempotence | 141 | ship |
| stale | dry-run spread | 216 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `stress` becomes less cautious without a clear reason, I would inspect the drag input first.
