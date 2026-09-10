// _runtime/03997_parsers.js
import _mod3998 from "metro/03998__.js";
import _mod4000 from "metro/04000__.js";
import _mod4003 from "metro/04003__.js";
import _mod4004 from "metro/04004__.js";
import _mod4005 from "metro/04005__.js";
import _mod4006 from "metro/04006__.js";
import _mod4007 from "metro/04007__.js";
import _mod4008 from "metro/04008__.js";
import _mod4009 from "metro/04009__.js";
import _mod4010 from "metro/04010__.js";
import _mod4012 from "metro/04012__.js";
import _mod4014 from "metro/04014__.js";
import _mod4015 from "metro/04015__.js";
import _mod4016 from "metro/04016__.js";
import _mod4018 from "metro/04018__.js";
import _mod4019 from "metro/04019__.js";
import _mod4020 from "metro/04020__.js";
import _mod4022 from "metro/04022__.js";
import _mod4023 from "metro/04023__.js";
import _mod4024 from "metro/04024__.js";
import _mod4025 from "metro/04025__.js";
import _mod4026 from "metro/04026__.js";
import _mod4027 from "metro/04027__.js";
import _mod4028 from "metro/04028__.js";
import _mod4029 from "metro/04029__.js";
import _mod4030 from "metro/04030__.js";
import _mod4031 from "metro/04031__.js";
import _mod4032 from "metro/04032__.js";
import _mod4033 from "metro/04033__.js";
import _mod4034 from "metro/04034__.js";
import _mod4035 from "metro/04035__.js";

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
const eraParser = new _mod3998.EraParser();
point.G = eraParser;
const yearParser = new _mod4000.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4003.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4004.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4005.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4006.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4007.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4008.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4009.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4010.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4012.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4014.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4015.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4016.DayParser();
point.E = dayParser;
const localDayParser = new _mod4018.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4019.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4020.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4022.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4023.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4024.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4025.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4026.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4027.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4028.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4029.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4030.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4031.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4032.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4033.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4034.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4035.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
