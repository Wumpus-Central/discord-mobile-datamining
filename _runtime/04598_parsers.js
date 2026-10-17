// _runtime/04598_parsers.js
import _mod4599 from "metro/04599__.js";
import _mod4601 from "metro/04601__.js";
import _mod4604 from "metro/04604__.js";
import _mod4605 from "metro/04605__.js";
import _mod4606 from "metro/04606__.js";
import _mod4607 from "metro/04607__.js";
import _mod4608 from "metro/04608__.js";
import _mod4609 from "metro/04609__.js";
import _mod4610 from "metro/04610__.js";
import _mod4611 from "metro/04611__.js";
import _mod4613 from "metro/04613__.js";
import _mod4615 from "metro/04615__.js";
import _mod4616 from "metro/04616__.js";
import _mod4617 from "metro/04617__.js";
import _mod4619 from "metro/04619__.js";
import _mod4620 from "metro/04620__.js";
import _mod4621 from "metro/04621__.js";
import _mod4623 from "metro/04623__.js";
import _mod4624 from "metro/04624__.js";
import _mod4625 from "metro/04625__.js";
import _mod4626 from "metro/04626__.js";
import _mod4627 from "metro/04627__.js";
import _mod4628 from "metro/04628__.js";
import _mod4629 from "metro/04629__.js";
import _mod4630 from "metro/04630__.js";
import _mod4631 from "metro/04631__.js";
import _mod4632 from "metro/04632__.js";
import _mod4633 from "metro/04633__.js";
import _mod4634 from "metro/04634__.js";
import _mod4635 from "metro/04635__.js";
import _mod4636 from "metro/04636__.js";

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
const eraParser = new _mod4599.EraParser();
point.G = eraParser;
const yearParser = new _mod4601.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4604.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4605.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4606.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4607.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4608.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4609.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4610.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4611.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4613.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4615.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4616.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4617.DayParser();
point.E = dayParser;
const localDayParser = new _mod4619.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4620.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4621.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4623.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4624.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4625.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4626.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4627.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4628.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4629.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4630.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4631.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4632.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4633.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4634.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4635.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4636.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
