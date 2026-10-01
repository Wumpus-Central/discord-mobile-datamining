// _runtime/04251_parsers.js
import _mod4252 from "metro/04252__.js";
import _mod4254 from "metro/04254__.js";
import _mod4257 from "metro/04257__.js";
import _mod4258 from "metro/04258__.js";
import _mod4259 from "metro/04259__.js";
import _mod4260 from "metro/04260__.js";
import _mod4261 from "metro/04261__.js";
import _mod4262 from "metro/04262__.js";
import _mod4263 from "metro/04263__.js";
import _mod4264 from "metro/04264__.js";
import _mod4266 from "metro/04266__.js";
import _mod4268 from "metro/04268__.js";
import _mod4269 from "metro/04269__.js";
import _mod4270 from "metro/04270__.js";
import _mod4272 from "metro/04272__.js";
import _mod4273 from "metro/04273__.js";
import _mod4274 from "metro/04274__.js";
import _mod4276 from "metro/04276__.js";
import _mod4277 from "metro/04277__.js";
import _mod4278 from "metro/04278__.js";
import _mod4279 from "metro/04279__.js";
import _mod4280 from "metro/04280__.js";
import _mod4281 from "metro/04281__.js";
import _mod4282 from "metro/04282__.js";
import _mod4283 from "metro/04283__.js";
import _mod4284 from "metro/04284__.js";
import _mod4285 from "metro/04285__.js";
import _mod4286 from "metro/04286__.js";
import _mod4287 from "metro/04287__.js";
import _mod4288 from "metro/04288__.js";
import _mod4289 from "metro/04289__.js";

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
const eraParser = new _mod4252.EraParser();
point.G = eraParser;
const yearParser = new _mod4254.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4257.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4258.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4259.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4260.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4261.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4262.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4263.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4264.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4266.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4268.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4269.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4270.DayParser();
point.E = dayParser;
const localDayParser = new _mod4272.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4273.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4274.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4276.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4277.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4278.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4279.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4280.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4281.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4282.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4283.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4284.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4285.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4286.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4287.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4288.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4289.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
