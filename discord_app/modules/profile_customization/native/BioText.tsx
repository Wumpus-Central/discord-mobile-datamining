// discord_app/modules/profile_customization/native/BioText.tsx
import noop from "noop";
import { Pressable } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { CHANGELOG_URL } from "CHANGELOG_MODAL_KEY";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function LinkButton(arg0) {
  let lineClamp;
  let text;
  ({ lineClamp, text } = arg0);
  const tmp = callback3();
  obj = {
    onPress() {
      let obj = callback(3982);
      obj.openURL(closure_6);
      obj = { cta_type: "profile_bio", target: closure_6 };
      callback(698).track(constants.CHANGE_LOG_CTA_CLICKED, obj);
    },
    style: tmp.link,
    children: callback(Text.Text, obj)
  };
  obj = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link, children: items };
  items = ["\n", text];
  return callback2(Pressable, obj);
}
({ jsxs: error, jsx: metroImportAll, Fragment: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 }, span: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, display: "flex", paddingBottom: 2 }, link: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, bottom: -4, position: "relative" } });
const result = require("ME").fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default function BioText(lineClamp) {
  let bio;
  let placeholder;
  let textVariant;
  let userId;
  ({ placeholder, bio } = lineClamp);
  lineClamp = lineClamp.lineClamp;
  ({ userId, textVariant } = lineClamp);
  if (textVariant === undefined) {
    textVariant = "text-md/normal";
  }
  const tmp = callback3();
  const items = [bio, textVariant];
  let memo = React.useMemo(() => {
    let obj = bio(textVariant[9]);
    obj = { linkVariant: textVariant, textVariant, customEmojiOffsetY: null };
    let num;
    if (obj3.isAndroid()) {
      num = 3;
    }
    obj[2] = num;
    return obj.parseBioReact(bio, undefined, obj);
  }, items);
  let tmp3 = 0 === bio.length;
  if (tmp3) {
    tmp3 = !lineClamp(textVariant[11])(userId);
  }
  if (lineClamp(textVariant[11])(userId)) {
    let obj = { variant: null, color: null, lineClamp: null, style: null, children: null };
    obj[0] = textVariant;
    let str2 = "text-default";
    let str3 = "text-default";
    if (tmp3) {
      str3 = "text-muted";
    }
    obj[1] = str3;
    obj[2] = lineClamp;
    obj[3] = tmp.text;
    const intl = tmp12(tmp6[12]).intl;
    const items1 = [intl.string(bio(tmp6[12]).t.OJmNR9), "\n"];
    obj[4] = items1;
    const items2 = [closure_7(bio(tmp6[8]).Text, obj, "changelog-bio"), ];
    obj = { variant: null, color: null, lineClamp: null, style: null, children: null };
    obj[0] = textVariant;
    if (tmp3) {
      str2 = "text-muted";
    }
    const obj1 = { children: null };
    obj[1] = str2;
    obj[2] = lineClamp;
    obj[3] = tmp.span;
    const intl2 = tmp12(tmp6[12]).intl;
    const obj2 = { blogHook: null };
    obj2[0] = function blogHook(text) {
      return outer1_8(outer1_11, { lineClamp, text }, arg1);
    };
    obj[4] = intl2.format(bio(tmp6[12]).t.RCYeBL, obj2);
    items2[1] = closure_8(bio(tmp6[8]).Text, obj, "changelog-cta");
    obj1[0] = items2;
    let tmp8Result = tmp10(closure_9, obj1);
    const tmp11 = closure_9;
    const tmp13 = closure_8;
  } else if (!tmp3) {
    obj = { variant: null, color: null, lineClamp: null, style: null, children: null };
    obj[0] = textVariant;
    let str = "text-default";
    if (tmp3) {
      str = "text-muted";
    }
    obj[1] = str;
    obj[2] = lineClamp;
    obj[3] = tmp.text;
    if (tmp3) {
      memo = placeholder;
    }
    obj[4] = memo;
    tmp8Result = closure_8(bio(tmp6[8]).Text, obj);
    const tmp8 = closure_8;
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};