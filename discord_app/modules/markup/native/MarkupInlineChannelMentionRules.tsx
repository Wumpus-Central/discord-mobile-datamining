// discord_app/modules/markup/native/MarkupInlineChannelMentionRules.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import native from "../../../design/void/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import MarkupRulesUtils from "../MarkupRulesUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const inlineChannelReact = (iconType, output, key) => {
  let items;
  let obj3;
  let smartOutputResult;
  let str2;
  let tmp13;
  let tmp9;
  iconType = iconType.iconType;
  switch (iconType) {
    case "text": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "text-nsfw": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "text-spoiler": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "announcement": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "announcement-nsfw": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "announcement-spoiler": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "forum": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "forum-nsfw": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "forum-spoiler": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "media": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "media-nsfw": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "app": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "app-nsfw": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "app-spoiler": {
      str2 = "#";
      str = undefined;
      tmp9 = native;
      let LegacyText = tmp9.LegacyText;
      items = [str2, ,];
      obj3 = MarkupRulesUtils;
      smartOutputResult = obj3.smartOutput(iconType, output, key);
      items[1] = smartOutputResult;
      items[2] = str;
      tmp13 = <LegacyText key={key.key}>{items}</LegacyText>;
      return tmp13;
    }
    case "thread": {
      str = '"';
      str2 = '"';
      break;
    }
    case "post": {
      str = '"';
      str2 = '"';
      break;
    }
    case "message": {
      str2 = str;
      break;
    }
    case "voice": {
      break;
    }
    case "voice-locked": {
      break;
    }
    case "voice-nsfw": {
      break;
    }
    case "voice-spoiler": {
      break;
    }
    case "stage": {
      break;
    }
    case "stage-locked": {
      break;
    }
    case "locked": {
      break;
    }
    case "guide": {
      break;
    }
    case "home": {
      break;
    }
    case "browse": {
      break;
    }
    case "customize": {
      break;
    }
    case "linked-roles": {
      break;
    }
    default: {
      const obj = GlobalUtils;
      obj.assertNever(iconType);
      break;
    }
  }
};
const jsxs = Fragment.jsxs;
let c0 = "\u{1F4AC}";
const result = size.fileFinishedImporting("modules/markup/native/MarkupInlineChannelMentionRules.tsx");

export const inlineChannelMentionReact = function inlineChannelMentionReact(inContent, fn, key) {
  let smartOutputResult;
  if (null == inContent.inContent) {
    const obj3 = MarkupRulesUtils;
    smartOutputResult = obj3.smartOutput(inContent, fn, key);
  } else {
    const LegacyText = native.LegacyText;
    const items = [fn(inContent.inContent, key), " \u203A "];
    const obj2 = MarkupRulesUtils;
    items[2] = obj2.smartOutput(inContent, fn, key);
    smartOutputResult = <LegacyText key={key.key}>{items}</LegacyText>;
  }
  return smartOutputResult;
};
export function createInlineChannelReact(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "\u{1F4AC}";
  }
  return inlineChannelReact;
}
export { inlineChannelReact };
