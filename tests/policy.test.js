import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 58,
    "capacity": 71,
    "latency": 27,
    "risk": 17,
    "weight": 11,
    "score": 43,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 100,
    "capacity": 72,
    "latency": 12,
    "risk": 22,
    "weight": 12,
    "score": 150,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 90,
    "capacity": 71,
    "latency": 22,
    "risk": 19,
    "weight": 5,
    "score": 100,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
