// _runtime/04562_parsers.js
import _mod4563 from "metro/04563__.js";
import _mod4565 from "metro/04565__.js";
import _mod4568 from "metro/04568__.js";
import _mod4569 from "metro/04569__.js";
import _mod4570 from "metro/04570__.js";
import _mod4571 from "metro/04571__.js";
import _mod4572 from "metro/04572__.js";
import _mod4573 from "metro/04573__.js";
import _mod4574 from "metro/04574__.js";
import _mod4575 from "metro/04575__.js";
import _mod4577 from "metro/04577__.js";
import _mod4579 from "metro/04579__.js";
import _mod4580 from "metro/04580__.js";
import _mod4581 from "metro/04581__.js";
import _mod4583 from "metro/04583__.js";
import _mod4584 from "metro/04584__.js";
import _mod4585 from "metro/04585__.js";
import _mod4587 from "metro/04587__.js";
import _mod4588 from "metro/04588__.js";
import _mod4589 from "metro/04589__.js";
import _mod4590 from "metro/04590__.js";
import _mod4591 from "metro/04591__.js";
import _mod4592 from "metro/04592__.js";
import _mod4593 from "metro/04593__.js";
import _mod4594 from "metro/04594__.js";
import _mod4595 from "metro/04595__.js";
import _mod4596 from "metro/04596__.js";
import _mod4597 from "metro/04597__.js";
import _mod4598 from "metro/04598__.js";
import _mod4599 from "metro/04599__.js";
import _mod4600 from "metro/04600__.js";

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
const eraParser = new _mod4563.EraParser();
point.G = eraParser;
const yearParser = new _mod4565.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4568.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4569.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4570.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4571.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4572.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4573.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4574.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4575.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4577.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4579.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4580.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4581.DayParser();
point.E = dayParser;
const localDayParser = new _mod4583.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4584.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4585.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4587.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4588.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4589.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4590.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4591.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4592.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4593.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4594.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4595.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4596.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4597.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4598.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4599.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4600.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
