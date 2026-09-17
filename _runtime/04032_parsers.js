// _runtime/04032_parsers.js
import _mod4033 from "metro/04033__.js";
import _mod4035 from "metro/04035__.js";
import _mod4038 from "metro/04038__.js";
import _mod4039 from "metro/04039__.js";
import _mod4040 from "metro/04040__.js";
import _mod4041 from "metro/04041__.js";
import _mod4042 from "metro/04042__.js";
import _mod4043 from "metro/04043__.js";
import _mod4044 from "metro/04044__.js";
import _mod4045 from "metro/04045__.js";
import _mod4047 from "metro/04047__.js";
import _mod4049 from "metro/04049__.js";
import _mod4050 from "metro/04050__.js";
import _mod4051 from "metro/04051__.js";
import _mod4053 from "metro/04053__.js";
import _mod4054 from "metro/04054__.js";
import _mod4055 from "metro/04055__.js";
import _mod4057 from "metro/04057__.js";
import _mod4058 from "metro/04058__.js";
import _mod4059 from "metro/04059__.js";
import _mod4060 from "metro/04060__.js";
import _mod4061 from "metro/04061__.js";
import _mod4062 from "metro/04062__.js";
import _mod4063 from "metro/04063__.js";
import _mod4064 from "metro/04064__.js";
import _mod4065 from "metro/04065__.js";
import _mod4066 from "metro/04066__.js";
import _mod4067 from "metro/04067__.js";
import _mod4068 from "metro/04068__.js";
import _mod4069 from "metro/04069__.js";
import _mod4070 from "metro/04070__.js";

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
const eraParser = new _mod4033.EraParser();
point.G = eraParser;
const yearParser = new _mod4035.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4038.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4039.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4040.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4041.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4042.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4043.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4044.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4045.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4047.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4049.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4050.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4051.DayParser();
point.E = dayParser;
const localDayParser = new _mod4053.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4054.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4055.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4057.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4058.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4059.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4060.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4061.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4062.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4063.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4064.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4065.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4066.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4067.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4068.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4069.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4070.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
