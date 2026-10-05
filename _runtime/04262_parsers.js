// _runtime/04262_parsers.js
import EraParser from "04263_EraParser.js";
import YearParser from "04265_YearParser.js";
import LocalWeekYearParser from "04268_LocalWeekYearParser.js";
import ISOWeekYearParser from "04269_ISOWeekYearParser.js";
import ExtendedYearParser from "04270_ExtendedYearParser.js";
import QuarterParser from "04271_QuarterParser.js";
import StandAloneQuarterParser from "04272_StandAloneQuarterParser.js";
import MonthParser from "04273_MonthParser.js";
import StandAloneMonthParser from "04274_StandAloneMonthParser.js";
import LocalWeekParser from "04275_LocalWeekParser.js";
import ISOWeekParser from "04277_ISOWeekParser.js";
import DateParser from "04279_DateParser.js";
import DayOfYearParser from "04280_DayOfYearParser.js";
import DayParser from "04281_DayParser.js";
import LocalDayParser from "04283_LocalDayParser.js";
import StandAloneLocalDayParser from "04284_StandAloneLocalDayParser.js";
import ISODayParser from "04285_ISODayParser.js";
import AMPMParser from "04287_AMPMParser.js";
import AMPMMidnightParser from "04288_AMPMMidnightParser.js";
import DayPeriodParser from "04289_DayPeriodParser.js";
import Hour1to12Parser from "04290_Hour1to12Parser.js";
import Hour0to23Parser from "04291_Hour0to23Parser.js";
import Hour0To11Parser from "04292_Hour0To11Parser.js";
import Hour1To24Parser from "04293_Hour1To24Parser.js";
import MinuteParser from "04294_MinuteParser.js";
import SecondParser from "04295_SecondParser.js";
import FractionOfSecondParser from "04296_FractionOfSecondParser.js";
import ISOTimezoneWithZParser from "04297_ISOTimezoneWithZParser.js";
import ISOTimezoneParser from "04298_ISOTimezoneParser.js";
import TimestampSecondsParser from "04299_TimestampSecondsParser.js";
import TimestampMillisecondsParser from "04300_TimestampMillisecondsParser.js";

let aMPMMidnightParser;
let aMPMParser;
let dateParser;
let dayOfYearParser;
let dayParser;
let dayPeriodParser;
let eraParser;
let extendedYearParser;
let fractionOfSecondParser;
let hour0To11Parser;
let hour0to23Parser;
let hour1To24Parser;
let hour1to12Parser;
let iSODayParser;
let iSOTimezoneParser;
let iSOTimezoneWithZParser;
let iSOWeekParser;
let iSOWeekYearParser;
let localDayParser;
let localWeekParser;
let localWeekYearParser;
let minuteParser;
let monthParser;
let quarterParser;
let secondParser;
let standAloneLocalDayParser;
let standAloneMonthParser;
let standAloneQuarterParser;
let timestampMillisecondsParser;
let timestampSecondsParser;
let yearParser;
const point = {
  G: eraParser,
  y: yearParser,
  Y: localWeekYearParser,
  R: iSOWeekYearParser,
  u: extendedYearParser,
  Q: quarterParser,
  q: standAloneQuarterParser,
  M: monthParser,
  L: standAloneMonthParser,
  w: localWeekParser,
  I: iSOWeekParser,
  d: dateParser,
  D: dayOfYearParser,
  E: dayParser,
  e: localDayParser,
  c: standAloneLocalDayParser,
  i: iSODayParser,
  a: aMPMParser,
  b: aMPMMidnightParser,
  B: dayPeriodParser,
  h: hour1to12Parser,
  H: hour0to23Parser,
  K: hour0To11Parser,
  k: hour1To24Parser,
  m: minuteParser,
  s: secondParser,
  S: fractionOfSecondParser,
  X: iSOTimezoneWithZParser,
  x: iSOTimezoneParser,
  t: timestampSecondsParser,
  T: timestampMillisecondsParser,
};
eraParser = new EraParser.EraParser();
yearParser = new YearParser.YearParser();
localWeekYearParser = new LocalWeekYearParser.LocalWeekYearParser();
iSOWeekYearParser = new ISOWeekYearParser.ISOWeekYearParser();
extendedYearParser = new ExtendedYearParser.ExtendedYearParser();
quarterParser = new QuarterParser.QuarterParser();
standAloneQuarterParser = new StandAloneQuarterParser.StandAloneQuarterParser();
monthParser = new MonthParser.MonthParser();
standAloneMonthParser = new StandAloneMonthParser.StandAloneMonthParser();
localWeekParser = new LocalWeekParser.LocalWeekParser();
iSOWeekParser = new ISOWeekParser.ISOWeekParser();
dateParser = new DateParser.DateParser();
dayOfYearParser = new DayOfYearParser.DayOfYearParser();
dayParser = new DayParser.DayParser();
localDayParser = new LocalDayParser.LocalDayParser();
standAloneLocalDayParser = new StandAloneLocalDayParser.StandAloneLocalDayParser();
iSODayParser = new ISODayParser.ISODayParser();
aMPMParser = new AMPMParser.AMPMParser();
aMPMMidnightParser = new AMPMMidnightParser.AMPMMidnightParser();
dayPeriodParser = new DayPeriodParser.DayPeriodParser();
hour1to12Parser = new Hour1to12Parser.Hour1to12Parser();
hour0to23Parser = new Hour0to23Parser.Hour0to23Parser();
hour0To11Parser = new Hour0To11Parser.Hour0To11Parser();
hour1To24Parser = new Hour1To24Parser.Hour1To24Parser();
minuteParser = new MinuteParser.MinuteParser();
secondParser = new SecondParser.SecondParser();
fractionOfSecondParser = new FractionOfSecondParser.FractionOfSecondParser();
iSOTimezoneWithZParser = new ISOTimezoneWithZParser.ISOTimezoneWithZParser();
iSOTimezoneParser = new ISOTimezoneParser.ISOTimezoneParser();
timestampSecondsParser = new TimestampSecondsParser.TimestampSecondsParser();
timestampMillisecondsParser = new TimestampMillisecondsParser.TimestampMillisecondsParser();

export const parsers = point;
