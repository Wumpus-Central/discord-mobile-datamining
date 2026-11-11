// _runtime/04826_parsers.js
import _mod4827 from "metro/04827__.js";
import _mod4829 from "metro/04829__.js";
import _mod4832 from "metro/04832__.js";
import _mod4833 from "metro/04833__.js";
import _mod4834 from "metro/04834__.js";
import _mod4835 from "metro/04835__.js";
import _mod4836 from "metro/04836__.js";
import _mod4837 from "metro/04837__.js";
import _mod4838 from "metro/04838__.js";
import _mod4839 from "metro/04839__.js";
import _mod4841 from "metro/04841__.js";
import _mod4843 from "metro/04843__.js";
import _mod4844 from "metro/04844__.js";
import _mod4845 from "metro/04845__.js";
import _mod4847 from "metro/04847__.js";
import _mod4848 from "metro/04848__.js";
import _mod4849 from "metro/04849__.js";
import _mod4851 from "metro/04851__.js";
import _mod4852 from "metro/04852__.js";
import _mod4853 from "metro/04853__.js";
import _mod4854 from "metro/04854__.js";
import _mod4855 from "metro/04855__.js";
import _mod4856 from "metro/04856__.js";
import _mod4857 from "metro/04857__.js";
import _mod4858 from "metro/04858__.js";
import _mod4859 from "metro/04859__.js";
import _mod4860 from "metro/04860__.js";
import _mod4861 from "metro/04861__.js";
import _mod4862 from "metro/04862__.js";
import _mod4863 from "metro/04863__.js";
import _mod4864 from "metro/04864__.js";

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
const eraParser = new _mod4827.EraParser();
point.G = eraParser;
const yearParser = new _mod4829.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4832.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4833.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4834.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4835.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4836.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4837.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4838.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4839.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4841.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4843.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4844.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4845.DayParser();
point.E = dayParser;
const localDayParser = new _mod4847.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4848.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4849.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4851.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4852.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4853.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4854.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4855.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4856.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4857.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4858.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4859.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4860.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4861.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4862.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4863.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4864.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
