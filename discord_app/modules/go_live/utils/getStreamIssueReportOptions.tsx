// discord_app/modules/go_live/utils/getStreamIssueReportOptions.tsx
import { StreamIssueReportReasons } from "StreamIssueReportReasons";

const result = require("set").fileFinishedImporting("modules/go_live/utils/getStreamIssueReportOptions.tsx");

export default function getStreamIssueReportOptions(isEndStream) {
  isEndStream = isEndStream.isEndStream;
  let obj = { id: "black-screen", value: StreamIssueReportReasons.BLACK_SCREEN, label: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require("../../../intl/index.native.tsx") /* getSystemLocale */.t;
  if (isEndStream) {
    let stringResult = string(t["0X5Zbq"]);
    let tmp6 = tmp2;
  } else {
    stringResult = string(t.fxiRNr);
    tmp6 = tmp2;
  }
  obj[2] = stringResult;
  const items = [obj, , , , , , , , ];
  obj = { id: "blurry", value: tmp.BLURRY, label: null };
  const intl2 = tmp6(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1236).t;
  if (isEndStream) {
    let string2Result = string2(t2.VVPQyy);
  } else {
    string2Result = string2(t2.E8jTMN);
  }
  obj[2] = string2Result;
  items[1] = obj;
  obj = { id: "lagging", value: tmp.LAGGING, label: null };
  const intl3 = tmp6(1236).intl;
  const string3 = intl3.string;
  const t3 = tmp6(1236).t;
  if (isEndStream) {
    let string3Result = string3(t3.ObEHd4);
  } else {
    string3Result = string3(t3.VoSJEQ);
  }
  obj[2] = string3Result;
  items[2] = obj;
  const obj1 = { id: "out-of-sync", value: StreamIssueReportReasons.OUT_OF_SYNC, label: null };
  const intl4 = tmp6(1236).intl;
  const string4 = intl4.string;
  const t4 = tmp6(1236).t;
  if (isEndStream) {
    let string4Result = string4(t4.mYmwD3);
  } else {
    string4Result = string4(t4["+NluQm"]);
  }
  obj1[2] = string4Result;
  items[3] = obj1;
  const obj2 = { id: "audio-missing", value: StreamIssueReportReasons.AUDIO_MISSING, label: null };
  const intl5 = tmp6(1236).intl;
  const string5 = intl5.string;
  const t5 = tmp6(1236).t;
  if (isEndStream) {
    let string5Result = string5(t5["Xwv41+"]);
  } else {
    string5Result = string5(t5.G2egzT);
  }
  obj2[2] = string5Result;
  items[4] = obj2;
  const obj3 = { id: "audio-poor", value: StreamIssueReportReasons.AUDIO_POOR, label: null };
  const intl6 = tmp6(1236).intl;
  const string6 = intl6.string;
  const t6 = tmp6(1236).t;
  if (isEndStream) {
    let string6Result = string6(t6["fHey+d"]);
  } else {
    string6Result = string6(t6.aHOfIo);
  }
  obj3[2] = string6Result;
  items[5] = obj3;
  const obj4 = { id: "stream-stopped", value: StreamIssueReportReasons.STREAM_STOPPED, label: null };
  const intl7 = tmp6(1236).intl;
  obj4[2] = intl7.string(tmp6(1236).t.uEoqQp);
  items[6] = obj4;
  const obj5 = { id: "vibes-off", value: StreamIssueReportReasons.VIBES_OFF, label: null };
  const intl8 = tmp6(1236).intl;
  obj5[2] = intl8.string(tmp6(1236).t["++JLL0"]);
  items[7] = obj5;
  const obj6 = { id: "other", value: StreamIssueReportReasons.OTHER, label: null };
  const intl9 = tmp6(1236).intl;
  obj6[2] = intl9.string(tmp6(1236).t.emlT91);
  items[8] = obj6;
  return items;
};