import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 55, slack: 28, drag: 25, confidence: 80 };
assert.equal(domainReviewScore(item), 143);
assert.equal(domainReviewLane(item), "ship");
