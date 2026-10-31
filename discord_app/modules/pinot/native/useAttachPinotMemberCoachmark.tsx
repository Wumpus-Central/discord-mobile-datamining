// === Module 11332: useAttachPinotMemberCoachmark ===

// Module 11332 (useAttachPinotMemberCoachmark)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3160 from "module_3160" /* 3160 */;
import Text_Text from "Text/Text" /* 5624 */;
import ExperimentalWebIcon from "ExperimentalWebIcon" /* 11333 */;
import PinotAnalytics from "PinotAnalytics" /* 11335 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function renderWebIcon() {
  return React5(ExperimentalWebIcon.ExperimentalWebIcon, { size: "lg", color: nativeDefault.colors.ICON_STRONG });
}
const Constants = fn(1072);
({ HelpdeskArticles: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/pinot/native/useAttachPinotMemberCoachmark.tsx");

export function useAttachPinotMemberCoachmark(ref1, channel, bottom) {
  _require = bottom;
  const pinotMemberCoachmark = require("usePinotMemberCoachmark").usePinotMemberCoachmark(channel, "mobile_member_coachmark");
  const visible = pinotMemberCoachmark.visible;
  markAsDismissed = pinotMemberCoachmark.markAsDismissed;
  const guild_id = channel.guild_id;
  let items = [visible, guild_id];
  const effect = guild_id.useEffect(() => {
    if (visible) {
      const obj2 = { noticeType: "member_coachmark", guildId: guild_id };
      const result = PinotAnalytics.trackPinotNoticeViewed(obj2);
    }
  }, items);
  const items1 = [visible, bottom, guild_id, markAsDismissed];
  const memo = guild_id.useMemo(() => {
    let obj = { title: null, description: null, renderImgComponent: null, visible: null, position: null, offsetY: 12, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3160.MrT2mn);
    let obj2 = { children: null };
    const intl2 = util.intl;
    const items = [intl2.string(_modDef3160.x9NGts), "\n", ];
    let obj3 = {
      variant: "text-sm/medium",
      color: "text-link",
      accessibilityRole: "link",
      onPress() {
        const result = closure_0(markAsDismissed[7]).trackPinotNoticeAction({ noticeType: "member_coachmark", guildId }, "open_settings");
        closure_1_2(constants3.TAKE_ACTION);
        const obj = closure_0(markAsDismissed[7]);
        const obj2 = { noticeType: "member_coachmark", guildId };
        closure_0(markAsDismissed[11]).openUserSettings({ screen: constants2.DATA_AND_PRIVACY });
      },
      children: null
    };
    const intl3 = util.intl;
    obj3.children = intl3.string(_modDef3160.eJZ8MS);
    items[2] = React5(Text_Text.Text, obj3);
    obj2.children = items;
    obj.description = React7(React6, obj2);
    obj.renderImgComponent = renderWebIcon;
    obj.visible = visible;
    obj.position = position;
    obj.onDismiss = function onDismiss() {
      const result = closure_0(markAsDismissed[7]).trackPinotNoticeAction({ noticeType: "member_coachmark", guildId }, "dismiss");
      closure_1_2(constants3.USER_DISMISS);
    };
    const intl4 = util.intl;
    obj.buttonLabel = intl4.string(util.t.hvVgAZ);
    obj.onButtonPress = function onButtonPress() {
      const result = closure_0(markAsDismissed[7]).trackPinotNoticeAction({ noticeType: "member_coachmark", guildId }, "learn_more");
      closure_1_2(constants3.TAKE_ACTION);
      const obj = closure_0(markAsDismissed[7]);
      const obj2 = { noticeType: "member_coachmark", guildId };
      const obj3 = visible(markAsDismissed[12]);
      obj3.openURL(visible(markAsDismissed[13]).getArticleURL(constants.DISCOVERABLE_CONTENT_ON_THE_WEB));
    };
    return obj;
  }, items1);
  let obj = require("usePinotMemberCoachmark");
  const coachmark = require("useCoachmark").useCoachmark(ref1, memo);
}