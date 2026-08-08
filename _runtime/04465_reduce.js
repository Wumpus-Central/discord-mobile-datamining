// _runtime/04465_reduce.js
import { baseForOwn } from "00601_baseForOwn.js";
import { baseIteratee } from "00720_baseIteratee.js";
import { 00599__ } from "metro/00599__.js";

export default function reduce(arg0, arg1, arg2) {
  if (00599__(arg0)) {
    let tmpResult = tmp(4466);
  } else {
    tmpResult = tmp(4467);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};