// _runtime/04429_formatDistance.js
import localeToNumber from "04430_localeToNumber.js";

let closure_2 = {
  lessThanXSeconds: {
    one: "\u0967 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E",
    other: "{{count}} \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E",
  },
  xSeconds: { one: "\u0967 \u0938\u0947\u0915\u0902\u0921", other: "{{count}} \u0938\u0947\u0915\u0902\u0921" },
  halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F",
  lessThanXMinutes: {
    one: "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E",
    other: "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E",
  },
  xMinutes: { one: "\u0967 \u092E\u093F\u0928\u091F", other: "{{count}} \u092E\u093F\u0928\u091F" },
  aboutXHours: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947",
  },
  xHours: { one: "\u0967 \u0918\u0902\u091F\u093E", other: "{{count}} \u0918\u0902\u091F\u0947" },
  xDays: { one: "\u0967 \u0926\u093F\u0928", other: "{{count}} \u0926\u093F\u0928" },
  aboutXWeeks: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0938\u092A\u094D\u0924\u093E\u0939",
  },
  xWeeks: {
    one: "\u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
    other: "{{count}} \u0938\u092A\u094D\u0924\u093E\u0939",
  },
  aboutXMonths: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u092E\u0939\u0940\u0928\u093E",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u092E\u0939\u0940\u0928\u0947",
  },
  xMonths: { one: "\u0967 \u092E\u0939\u0940\u0928\u093E", other: "{{count}} \u092E\u0939\u0940\u0928\u0947" },
  aboutXYears: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937",
  },
  xYears: { one: "\u0967 \u0935\u0930\u094D\u0937", other: "{{count}} \u0935\u0930\u094D\u0937" },
  overXYears: {
    one: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915",
    other: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915",
  },
  almostXYears: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937",
  },
};

export default function formatDistance(arg0, arg1, addSuffix) {
  let tmp2 = tmp;
  if (typeof closure_2[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      const str = closure_2[arg0].other;
      one = str.replace("{{count}}", localeToNumber.numberToLocale(arg1));
    }
    tmp2 = one;
  }
  let tmp5 = tmp2;
  if (null != addSuffix) {
    tmp5 = tmp2;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `${tmp2}मे `;
        }
        tmp5 = text;
      }
      text = `${tmp2} पहले`;
    }
  }
  return tmp5;
}
