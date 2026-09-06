// === Module 13272: GroupDMNitroCapCoachmark ===

// Module 13272 (GroupDMNitroCapCoachmark)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_GROUP_DM_NITRO_PARTICIPANTS as closure_6 } from "MAX_GROUP_DM_NITRO_PARTICIPANTS" /* 11593 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1954 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let closure_9 = createCacheKey.createStyles({ nitroWheelIcon: { width: 16, height: 16 } });
const result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  channelId = channelId.channelId;
  const _location = channelId.location;
  dependencyMap = undefined;
  let groupDMNitroAudience;
  let React;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = React;
  const ref = React.useRef(null);
  groupDMNitroAudience = channelId(11591).useGroupDMNitroAudience();
  React = tmp6;
  obj = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  const obj2 = channelId(11591);
  obj[2] = channelId(11591).GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp7Result = _location(11598)(obj);
  closure_5 = tmp7Result;
  let tmp7 = _location(11598);
  channelId(7388);
  if (obj4.useConfig({ location: _location }).enabled) {
    if ("staff" !== groupDMNitroAudience) {
      const items = [tmp3(1943).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp13 = groupDMNitroAudience(tmp10([]), 2);
    closure_6 = tmp14;
    const tmp15 = tmp13[0] === tmp3(1943).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    closure_7 = tmp15;
    const items1 = [groupDMNitroAudience, tmp6, tmp15, tmp13[1], channelId, _location, tmp, tmp7Result];
    const memo = obj.useMemo(() => {
      let obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 12, renderImgComponent: null, onDismiss: null, buttonLabel: null, buttonIcon: null, buttonVariant: null, buttonShiny: null, onButtonPress: null };
      let intl = channelId(nitroWheelIcon[12]).intl;
      obj[0] = intl.string(channelId(nitroWheelIcon[12]).t.d8Spvj);
      const intl2 = channelId(nitroWheelIcon[12]).intl;
      obj = { number: closure_6 };
      obj[1] = intl2.formatToPlainString(channelId(nitroWheelIcon[12]).t.U3CkDg, obj);
      obj[2] = closure_7;
      obj[5] = function renderImgComponent() {
        const obj = { text: null, color: null };
        const intl = callback(1114).intl;
        obj[0] = intl.string(callback(1114).t.oW0eUd);
        obj[1] = callback(1178).BadgeColors.EXPRESSIVE;
        return callback4(callback(1178).TextBadge, obj);
      };
      obj[6] = function onDismiss() {
        return callback3(closure_1_7.USER_DISMISS);
      };
      const intl3 = channelId(nitroWheelIcon[12]).intl;
      obj[7] = intl3.string(channelId(nitroWheelIcon[7]).getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
      if (closure_4) {
        let tmp7 = _location(tmp2[14]);
      } else {
        obj = { size: "custom", style: null, color: null };
        obj[1] = nitroWheelIcon.nitroWheelIcon;
        obj[2] = _location(tmp2[16]).unsafe_rawColors.WHITE;
        tmp7 = closure_1_8(channelId(tmp2[15]).NitroWheelIcon, obj);
      }
      obj[8] = tmp7;
      let str = "experimental_premium-primary";
      if (closure_4) {
        str = "primary";
      }
      obj[9] = str;
      obj[10] = !closure_4;
      obj[11] = function onButtonPress() {
        if (closure_4) {
          closure_1_1(closure_1_2[17])(closure_0, closure_1);
        } else {
          callback2();
        }
        callback3(closure_1_7.TAKE_ACTION);
      };
      return obj;
    }, items1);
    const coachmark = tmp3(11127).useCoachmark(ref, memo);
    obj = { ref: null, collapsable: false, children: null };
    obj[0] = ref;
    obj[2] = channelId.children;
    return <closure_5 ref={null} collapsable={false}>{null}</closure_5>;
  }
};