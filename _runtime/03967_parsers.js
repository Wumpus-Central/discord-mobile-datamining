// _runtime/03967_parsers.js
import _mod3968 from "metro/03968__.js";
import _mod3970 from "metro/03970__.js";
import _mod3973 from "metro/03973__.js";
import _mod3974 from "metro/03974__.js";
import _mod3975 from "metro/03975__.js";
import _mod3976 from "metro/03976__.js";
import _mod3977 from "metro/03977__.js";
import _mod3978 from "metro/03978__.js";
import _mod3979 from "metro/03979__.js";
import _mod3980 from "metro/03980__.js";
import _mod3982 from "metro/03982__.js";
import _mod3984 from "metro/03984__.js";
import _mod3985 from "metro/03985__.js";
import _mod3986 from "metro/03986__.js";
import _mod3988 from "metro/03988__.js";
import _mod3989 from "metro/03989__.js";
import _mod3990 from "metro/03990__.js";
import _mod3992 from "metro/03992__.js";
import _mod3993 from "metro/03993__.js";
import _mod3994 from "metro/03994__.js";
import _mod3995 from "metro/03995__.js";
import _mod3996 from "metro/03996__.js";
import _mod3997 from "metro/03997__.js";
import _mod3998 from "metro/03998__.js";
import _mod3999 from "metro/03999__.js";
import _mod4000 from "metro/04000__.js";
import _mod4001 from "metro/04001__.js";
import _mod4002 from "metro/04002__.js";
import _mod4003 from "metro/04003__.js";
import _mod4004 from "metro/04004__.js";
import _mod4005 from "metro/04005__.js";

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
const eraParser = new _mod3968.EraParser();
point.G = eraParser;
const yearParser = new _mod3970.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod3973.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod3974.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod3975.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod3976.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod3977.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod3978.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod3979.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod3980.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod3982.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod3984.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod3985.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod3986.DayParser();
point.E = dayParser;
const localDayParser = new _mod3988.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod3989.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod3990.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod3992.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod3993.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod3994.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod3995.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod3996.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod3997.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod3998.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod3999.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4000.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4001.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4002.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4003.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4004.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4005.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
