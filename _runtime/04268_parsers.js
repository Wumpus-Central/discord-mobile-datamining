// _runtime/04268_parsers.js
import _mod4269 from "metro/04269__.js";
import _mod4271 from "metro/04271__.js";
import _mod4274 from "metro/04274__.js";
import _mod4275 from "metro/04275__.js";
import _mod4276 from "metro/04276__.js";
import _mod4277 from "metro/04277__.js";
import _mod4278 from "metro/04278__.js";
import _mod4279 from "metro/04279__.js";
import _mod4280 from "metro/04280__.js";
import _mod4281 from "metro/04281__.js";
import _mod4283 from "metro/04283__.js";
import _mod4285 from "metro/04285__.js";
import _mod4286 from "metro/04286__.js";
import _mod4287 from "metro/04287__.js";
import _mod4289 from "metro/04289__.js";
import _mod4290 from "metro/04290__.js";
import _mod4291 from "metro/04291__.js";
import _mod4293 from "metro/04293__.js";
import _mod4294 from "metro/04294__.js";
import _mod4295 from "metro/04295__.js";
import _mod4296 from "metro/04296__.js";
import _mod4297 from "metro/04297__.js";
import _mod4298 from "metro/04298__.js";
import _mod4299 from "metro/04299__.js";
import _mod4300 from "metro/04300__.js";
import _mod4301 from "metro/04301__.js";
import _mod4302 from "metro/04302__.js";
import _mod4303 from "metro/04303__.js";
import _mod4304 from "metro/04304__.js";
import _mod4305 from "metro/04305__.js";
import _mod4306 from "metro/04306__.js";

const point = {
  G: null,
  y: null,
  Y: null,
  R: null,
  u: null,
  Q: null,
  q: null,
  M: null,
  L: null,
  w: null,
  I: null,
  d: null,
  D: null,
  E: null,
  e: null,
  c: null,
  i: null,
  a: null,
  b: null,
  B: null,
  h: null,
  H: null,
  K: null,
  k: null,
  m: null,
  s: null,
  S: null,
  X: null,
  x: null,
  t: null,
  T: null,
};
const eraParser = new _mod4269.EraParser();
point.G = eraParser;
const yearParser = new _mod4271.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4274.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4275.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4276.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4277.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4278.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4279.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4280.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4281.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4283.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4285.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4286.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4287.DayParser();
point.E = dayParser;
const localDayParser = new _mod4289.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4290.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4291.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4293.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4294.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4295.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4296.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4297.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4298.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4299.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4300.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4301.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4302.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4303.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4304.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4305.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4306.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
