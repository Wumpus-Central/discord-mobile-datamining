// _runtime/04535_parsers.js
import _mod4536 from "metro/04536__.js";
import _mod4538 from "metro/04538__.js";
import _mod4541 from "metro/04541__.js";
import _mod4542 from "metro/04542__.js";
import _mod4543 from "metro/04543__.js";
import _mod4544 from "metro/04544__.js";
import _mod4545 from "metro/04545__.js";
import _mod4546 from "metro/04546__.js";
import _mod4547 from "metro/04547__.js";
import _mod4548 from "metro/04548__.js";
import _mod4550 from "metro/04550__.js";
import _mod4552 from "metro/04552__.js";
import _mod4553 from "metro/04553__.js";
import _mod4554 from "metro/04554__.js";
import _mod4556 from "metro/04556__.js";
import _mod4557 from "metro/04557__.js";
import _mod4558 from "metro/04558__.js";
import _mod4560 from "metro/04560__.js";
import _mod4561 from "metro/04561__.js";
import _mod4562 from "metro/04562__.js";
import _mod4563 from "metro/04563__.js";
import _mod4564 from "metro/04564__.js";
import _mod4565 from "metro/04565__.js";
import _mod4566 from "metro/04566__.js";
import _mod4567 from "metro/04567__.js";
import _mod4568 from "metro/04568__.js";
import _mod4569 from "metro/04569__.js";
import _mod4570 from "metro/04570__.js";
import _mod4571 from "metro/04571__.js";
import _mod4572 from "metro/04572__.js";
import _mod4573 from "metro/04573__.js";

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
const eraParser = new _mod4536.EraParser();
point.G = eraParser;
const yearParser = new _mod4538.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4541.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4542.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4543.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4544.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4545.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4546.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4547.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4548.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4550.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4552.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4553.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4554.DayParser();
point.E = dayParser;
const localDayParser = new _mod4556.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4557.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4558.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4560.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4561.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4562.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4563.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4564.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4565.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4566.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4567.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4568.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4569.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4570.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4571.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4572.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4573.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
