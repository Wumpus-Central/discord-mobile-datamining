// _runtime/04462_parsers.js
import _mod4463 from "metro/04463__.js";
import _mod4465 from "metro/04465__.js";
import _mod4468 from "metro/04468__.js";
import _mod4469 from "metro/04469__.js";
import _mod4470 from "metro/04470__.js";
import _mod4471 from "metro/04471__.js";
import _mod4472 from "metro/04472__.js";
import _mod4473 from "metro/04473__.js";
import _mod4474 from "metro/04474__.js";
import _mod4475 from "metro/04475__.js";
import _mod4477 from "metro/04477__.js";
import _mod4479 from "metro/04479__.js";
import _mod4480 from "metro/04480__.js";
import _mod4481 from "metro/04481__.js";
import _mod4483 from "metro/04483__.js";
import _mod4484 from "metro/04484__.js";
import _mod4485 from "metro/04485__.js";
import _mod4487 from "metro/04487__.js";
import _mod4488 from "metro/04488__.js";
import _mod4489 from "metro/04489__.js";
import _mod4490 from "metro/04490__.js";
import _mod4491 from "metro/04491__.js";
import _mod4492 from "metro/04492__.js";
import _mod4493 from "metro/04493__.js";
import _mod4494 from "metro/04494__.js";
import _mod4495 from "metro/04495__.js";
import _mod4496 from "metro/04496__.js";
import _mod4497 from "metro/04497__.js";
import _mod4498 from "metro/04498__.js";
import _mod4499 from "metro/04499__.js";
import _mod4500 from "metro/04500__.js";

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
const eraParser = new _mod4463.EraParser();
point.G = eraParser;
const yearParser = new _mod4465.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4468.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4469.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4470.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4471.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4472.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4473.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4474.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4475.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4477.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4479.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4480.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4481.DayParser();
point.E = dayParser;
const localDayParser = new _mod4483.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4484.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4485.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4487.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4488.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4489.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4490.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4491.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4492.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4493.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4494.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4495.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4496.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4497.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4498.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4499.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4500.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
