// discord_app/modules/profile_customization/native/BioText.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BioMarkupUtils from "../../markup/BioMarkupUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function LinkButton(arg0) {
  ({ lineClamp, text } = arg0);
  const tmp = closure_10();
  let obj = {
    onPress() {
      LinkingDefault.openURL(target);
      AnalyticsUtilsDefault.track(constants.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target });
    },
    style: tmp.link,
    children: null,
  };
  const obj2 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link, children: null };
  const items = ["\n", text];
  obj2.children = items;
  obj.children = React5(Text_Text.Text, obj2);
  return React6(Pressable, obj);
}
const Pressable = fn(17).Pressable;
const AnalyticEvents = fn(1074).AnalyticEvents;
const CHANGELOG_URL = fn(2098).CHANGELOG_URL;
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4836);
let closure_10 = createStyles.createStyles({
  text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 },
  span: {
    alignSelf: "stretch",
    textAlignVertical: "bottom",
    width: "100%",
    flexGrow: 1,
    display: "flex",
    paddingBottom: 2,
  },
  link: {
    alignSelf: "stretch",
    textAlignVertical: "bottom",
    width: "100%",
    flexGrow: 1,
    bottom: -4,
    position: "relative",
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default function BioText(lineClamp) {
  ({ placeholder, bio } = lineClamp);
  lineClamp = lineClamp.lineClamp;
  ({ userId, textVariant } = lineClamp);
  if (textVariant === undefined) {
    textVariant = "text-md/normal";
  }
  const tmp = closure_10();
  const items = [bio, textVariant];
  let memo = noop.useMemo(() => {
    const obj2 = { linkVariant: textVariant, textVariant, customEmojiOffsetY: null };
    const obj = BioMarkupUtils;
    let num;
    if (obj3.isAndroid()) {
      num = 3;
    }
    obj2.customEmojiOffsetY = num;
    return obj.parseBioReact(bio, undefined, obj2);
  }, items);
  let tmp3 = 0 === bio.length;
  if (tmp3) {
    tmp3 = !lineClamp(textVariant[11])(userId);
  }
  if (lineClamp(textVariant[11])(userId)) {
    let obj2 = { variant: textVariant, color: null, lineClamp: null, style: null, children: null };
    let str2 = "text-default";
    let str3 = "text-default";
    if (tmp3) {
      str3 = "text-muted";
    }
    obj2.color = str3;
    obj2.lineClamp = lineClamp;
    obj2.style = tmp.text;
    const intl = bio(tmp6[12]).intl;
    const items1 = [intl.string(bio(tmp6[12]).t.OJmNR9), "\n"];
    obj2.children = items1;
    const items2 = [closure_7(bio(tmp6[8]).Text, obj2, "changelog-bio")];
    const obj3 = { variant: textVariant, color: null, lineClamp: null, style: null, children: null };
    if (tmp3) {
      str2 = "text-muted";
    }
    const obj4 = { children: null };
    obj3.color = str2;
    obj3.lineClamp = lineClamp;
    obj3.style = tmp.span;
    const intl2 = bio(tmp6[12]).intl;
    const obj5 = {
      blogHook(text, arg1) {
        return React6(LinkButton, { lineClamp, text }, arg1);
      },
    };
    obj3.children = intl2.format(bio(tmp6[12]).t.RCYeBL, obj5);
    items2[1] = closure_8(bio(tmp6[8]).Text, obj3, "changelog-cta");
    obj4.children = items2;
    let tmp8Result = closure_7(closure_9, obj4);
  } else if (!tmp3) {
    let obj = { variant: textVariant, color: null, lineClamp: null, style: null, children: null };
    let str = "text-default";
    if (tmp3) {
      str = "text-muted";
    }
    obj.color = str;
    obj.lineClamp = lineClamp;
    obj.style = tmp.text;
    if (tmp3) {
      memo = placeholder;
    }
    obj.children = memo;
    tmp8Result = closure_8(bio(tmp6[8]).Text, obj);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
}
