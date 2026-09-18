// _runtime/04115_parsers.js
import _mod4116 from "metro/04116__.js";
import _mod4118 from "metro/04118__.js";
import _mod4121 from "metro/04121__.js";
import _mod4122 from "metro/04122__.js";
import _mod4123 from "metro/04123__.js";
import _mod4124 from "metro/04124__.js";
import _mod4125 from "metro/04125__.js";
import _mod4126 from "metro/04126__.js";
import _mod4127 from "metro/04127__.js";
import _mod4128 from "metro/04128__.js";
import _mod4130 from "metro/04130__.js";
import _mod4132 from "metro/04132__.js";
import _mod4133 from "metro/04133__.js";
import _mod4134 from "metro/04134__.js";
import _mod4136 from "metro/04136__.js";
import _mod4137 from "metro/04137__.js";
import _mod4138 from "metro/04138__.js";
import _mod4140 from "metro/04140__.js";
import _mod4141 from "metro/04141__.js";
import _mod4142 from "metro/04142__.js";
import _mod4143 from "metro/04143__.js";
import _mod4144 from "metro/04144__.js";
import _mod4145 from "metro/04145__.js";
import _mod4146 from "metro/04146__.js";
import _mod4147 from "metro/04147__.js";
import _mod4148 from "metro/04148__.js";
import _mod4149 from "metro/04149__.js";
import _mod4150 from "metro/04150__.js";
import _mod4151 from "metro/04151__.js";
import _mod4152 from "metro/04152__.js";
import _mod4153 from "metro/04153__.js";

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
const eraParser = new _mod4116.EraParser();
point.G = eraParser;
const yearParser = new _mod4118.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4121.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4122.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4123.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4124.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4125.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4126.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4127.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4128.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4130.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4132.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4133.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4134.DayParser();
point.E = dayParser;
const localDayParser = new _mod4136.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4137.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4138.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4140.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4141.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4142.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4143.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4144.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4145.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4146.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4147.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4148.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4149.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4150.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4151.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4152.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4153.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
