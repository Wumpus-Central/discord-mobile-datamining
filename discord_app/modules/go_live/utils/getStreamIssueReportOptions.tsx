// === Module 17390: getStreamIssueReportOptions ===

// Module 17390 (getStreamIssueReportOptions)
import intl10 from "intl" /* 1126 */;
import Constants from "Constants" /* 4938 */;
import size from "module_2" /* 2 */;

const StreamIssueReportReasons = Constants.StreamIssueReportReasons;
const result = size.fileFinishedImporting("modules/go_live/utils/getStreamIssueReportOptions.tsx");

export default function getStreamIssueReportOptions(isEndStream) {
  let intl7;
  let intl8;
  let intl9;
  let string2Result;
  let string3Result;
  let string4Result;
  let string5Result;
  let string6Result;
  let stringResult;
  let tmp6;
  isEndStream = isEndStream.isEndStream;
  const obj = { id: "black-screen", value: StreamIssueReportReasons.BLACK_SCREEN, label: stringResult };
  const intl = intl10.intl;
  const string = intl.string;
  const t = intl10.t;
  if (isEndStream) {
    stringResult = string(t["0X5Zbq"]);
    tmp6 = require;
  } else {
    stringResult = string(t.fxiRNr);
    tmp6 = require;
  }
  const items = [obj, , , , , , , , ];
  const obj2 = { id: "blurry", value: StreamIssueReportReasons.BLURRY, label: string2Result };
  const intl2 = tmp6(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1126).t;
  if (isEndStream) {
    string2Result = string2(t2.VVPQyy);
  } else {
    string2Result = string2(t2.E8jTMN);
  }
  items[1] = obj2;
  const obj3 = { id: "lagging", value: StreamIssueReportReasons.LAGGING, label: string3Result };
  const intl3 = tmp6(1126).intl;
  const string3 = intl3.string;
  const t3 = tmp6(1126).t;
  if (isEndStream) {
    string3Result = string3(t3.ObEHd4);
  } else {
    string3Result = string3(t3.VoSJEQ);
  }
  items[2] = obj3;
  const obj4 = { id: "out-of-sync", value: StreamIssueReportReasons.OUT_OF_SYNC, label: string4Result };
  const intl4 = tmp6(1126).intl;
  const string4 = intl4.string;
  const t4 = tmp6(1126).t;
  if (isEndStream) {
    string4Result = string4(t4.mYmwD3);
  } else {
    string4Result = string4(t4["+NluQm"]);
  }
  items[3] = obj4;
  const obj5 = { id: "audio-missing", value: StreamIssueReportReasons.AUDIO_MISSING, label: string5Result };
  const intl5 = tmp6(1126).intl;
  const string5 = intl5.string;
  const t5 = tmp6(1126).t;
  if (isEndStream) {
    string5Result = string5(t5["Xwv41+"]);
  } else {
    string5Result = string5(t5.G2egzT);
  }
  items[4] = obj5;
  const obj6 = { id: "audio-poor", value: StreamIssueReportReasons.AUDIO_POOR, label: string6Result };
  const intl6 = tmp6(1126).intl;
  const string6 = intl6.string;
  const t6 = tmp6(1126).t;
  if (isEndStream) {
    string6Result = string6(t6["fHey+d"]);
  } else {
    string6Result = string6(t6.aHOfIo);
  }
  items[5] = obj6;
  const obj7 = { id: "stream-stopped", value: StreamIssueReportReasons.STREAM_STOPPED, label: intl7.string(tmp6(1126).t.uEoqQp) };
  intl7 = tmp6(1126).intl;
  items[6] = obj7;
  const obj8 = { id: "vibes-off", value: StreamIssueReportReasons.VIBES_OFF, label: intl8.string(tmp6(1126).t["++JLL0"]) };
  intl8 = tmp6(1126).intl;
  items[7] = obj8;
  const obj9 = { id: "other", value: StreamIssueReportReasons.OTHER, label: intl9.string(tmp6(1126).t.emlT91) };
  intl9 = tmp6(1126).intl;
  items[8] = obj9;
  return items;
};