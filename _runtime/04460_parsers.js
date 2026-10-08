// _runtime/04460_parsers.js
import _mod4461 from "metro/04461__.js";
import _mod4463 from "metro/04463__.js";
import _mod4466 from "metro/04466__.js";
import _mod4467 from "metro/04467__.js";
import _mod4468 from "metro/04468__.js";
import _mod4469 from "metro/04469__.js";
import _mod4470 from "metro/04470__.js";
import _mod4471 from "metro/04471__.js";
import _mod4472 from "metro/04472__.js";
import _mod4473 from "metro/04473__.js";
import _mod4475 from "metro/04475__.js";
import _mod4477 from "metro/04477__.js";
import _mod4478 from "metro/04478__.js";
import _mod4479 from "metro/04479__.js";
import _mod4481 from "metro/04481__.js";
import _mod4482 from "metro/04482__.js";
import _mod4483 from "metro/04483__.js";
import _mod4485 from "metro/04485__.js";
import _mod4486 from "metro/04486__.js";
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
const eraParser = new _mod4461.EraParser();
point.G = eraParser;
const yearParser = new _mod4463.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4466.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4467.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4468.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4469.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4470.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4471.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4472.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4473.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4475.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4477.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4478.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4479.DayParser();
point.E = dayParser;
const localDayParser = new _mod4481.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4482.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4483.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4485.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4486.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4487.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4488.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4489.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4490.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4491.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4492.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4493.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4494.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4495.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4496.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4497.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4498.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
