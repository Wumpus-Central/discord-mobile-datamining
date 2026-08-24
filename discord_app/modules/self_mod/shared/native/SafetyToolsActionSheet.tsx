// discord_app/modules/self_mod/shared/native/SafetyToolsActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/RelationshipStore.tsx";
import LOCATION_CONTEXT_MOBILE from "../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ACTION_SHEET_CONTEXT_MOBILE: closure_6, getSafetyToolsActionSheetKey: error, THROUGHLINE_URL: closure_8, NOFILTR_URL: c9, VIBING_WUMPUS_MODAL_KEY: c10 } = LOCATION_CONTEXT_MOBILE);
createCacheKey = { container: { flex: 1 }, actionRowGroup: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheet.tsx");

export default function SafetyToolsActionSheet(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const recipientId = channelId.recipientId;
  const onClose = channelId.onClose;
  closure_5 = undefined;
  let lastChannelMessage;
  let shouldShowHelplineLink;
  let shouldShowThroughlineLink;
  closure_9 = undefined;
  let stateFromStores;
  let stateFromStores1;
  let callback;
  const tmp = callback();
  closure_5 = tmp;
  let obj = channelId(warningType[7]);
  lastChannelMessage = obj.useLastChannelMessage(channelId);
  shouldShowHelplineLink = channelId(warningType[8]).useShouldShowHelplineLink();
  let obj2 = channelId(warningType[8]);
  shouldShowThroughlineLink = channelId(warningType[8]).useShouldShowThroughlineLink();
  let obj3 = channelId(warningType[8]);
  const tmp5 = null != channelId(warningType[9]).useSafetyToolsButtonTooltipForChannel(channelId);
  closure_9 = tmp5;
  let obj4 = channelId(warningType[9]);
  let items = [closure_5];
  let items1 = [recipientId];
  stateFromStores = channelId(warningType[10]).useStateFromStores(items, () => closure_5.isBlocked(recipientId), items1);
  let obj5 = channelId(warningType[10]);
  let items2 = [closure_5];
  let items3 = [recipientId];
  stateFromStores1 = channelId(warningType[10]).useStateFromStores(items2, () => closure_5.isIgnored(recipientId), items3);
  const items4 = [channelId, warningId, warningType, recipientId, tmp5];
  callback = recipientId.useCallback((cta) => {
    let obj = channelId(warningType[11]);
    obj = { channelId, warningId, senderId: recipientId, warningType, cta, isNudgeWarning: closure_9 };
    obj.trackCtaEvent(obj);
  }, items4);
  const items5 = [stateFromStores, stateFromStores1, shouldShowHelplineLink, shouldShowThroughlineLink, callback, recipientId, channelId, warningId, warningType, onClose, lastChannelMessage];
  const memo = recipientId.useMemo(() => {
    let obj = { size: "md", color: warningId(warningType[6]).colors.INTERACTIVE_TEXT_DEFAULT };
    const tmp4 = stateFromStores1(channelId(warningType[12]).ChevronSmallRightIcon, obj);
    obj = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl = channelId(warningType[13]).intl;
    obj[0] = intl.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl2 = channelId(warningType[13]).intl;
    obj[1] = intl2.string(channelId(warningType[13]).t.iNcsrW);
    obj[2] = warningId(warningType[14]);
    obj[3] = channelId(warningType[15]).HeartIcon;
    obj[4] = tmp4;
    obj[5] = function onPress() {
      closure_0 = closure_1_7(closure_0);
      let obj = closure_1_1(closure_1_2[16]);
      obj = {
        recipientId: closure_3,
        channelId: closure_0,
        warningId: closure_1,
        warningType: closure_2,
        onClose() {
          closure_1_1(closure_1_2[16]).hideActionSheet(closure_0);
        },
        trackAnalyticsEvent: callback2
      };
      obj.openLazy(closure_1_0(closure_1_2[18])(closure_1_2[17], closure_1_2.paths), closure_1_7(closure_0), obj);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL);
    };
    obj = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl3 = channelId(warningType[13]).intl;
    obj[0] = intl3.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl4 = channelId(warningType[13]).intl;
    obj[1] = intl4.string(channelId(warningType[13]).t.S9O1ZZ);
    obj[2] = warningId(warningType[14]);
    obj[3] = channelId(warningType[15]).HeartIcon;
    obj[4] = function onPress() {
      closure_1_1(closure_1_2[19]).openURL(closure_1_8);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_THROUGHLINE);
    };
    obj1 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl5 = channelId(warningType[13]).intl;
    obj1[0] = intl5.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl6 = channelId(warningType[13]).intl;
    obj1[1] = intl6.string(channelId(warningType[13]).t.g5uwC5);
    obj1[2] = warningId(warningType[14]);
    obj1[3] = channelId(warningType[15]).HeartIcon;
    obj1[4] = function onPress() {
      closure_1_1(closure_1_2[19]).openURL(closure_1_9);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR);
    };
    const intl7 = channelId(warningType[13]).intl;
    const string = intl7.string;
    const t = channelId(warningType[13]).t;
    if (stateFromStores1) {
      let stringResult = string(t["9e0wLn"]);
    } else {
      stringResult = string(t.B7ZT06);
    }
    const obj2 = { label: stringResult, subLabel: null, icon: null, IconComponent: null, disabled: null, onPress: null };
    let stringResult1;
    if (!stateFromStores1) {
      const intl8 = tmp(tmp2[13]).intl;
      stringResult1 = intl8.string(tmp(tmp2[13]).t.fCfp49);
    }
    obj2[1] = stringResult1;
    obj2[2] = warningId(stateFromStores1 ? warningType[20] : warningType[21]);
    if (stateFromStores1) {
      let EyeSlashIcon = tmp(tmp2[22]).EyeIcon;
    } else {
      EyeSlashIcon = tmp(tmp2[23]).EyeSlashIcon;
    }
    obj2[3] = EyeSlashIcon;
    obj2[4] = stateFromStores;
    obj2[5] = function onPress() {
      const obj = closure_1_1(closure_1_2[24]);
      if (closure_11) {
        obj.unignoreUser(closure_3, closure_1_6, closure_0);
        callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNIGNORE);
      } else {
        obj.ignoreUser(closure_3, closure_1_6, closure_0);
        callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_IGNORE);
      }
    };
    const items = [obj2, , ];
    const intl9 = tmp(tmp2[13]).intl;
    const string2 = intl9.string;
    const t2 = tmp(tmp2[13]).t;
    if (stateFromStores) {
      let string2Result = string2(t2.Hro40y);
    } else {
      string2Result = string2(t2.oDxaKy);
    }
    const obj3 = { sectionKey: "action", buttons: null };
    const obj4 = { label: string2Result, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl10 = tmp(tmp2[13]).intl;
    obj4[1] = intl10.string(channelId(warningType[13]).t.Lj37az);
    obj4[2] = warningId(warningType[25]);
    obj4[3] = channelId(warningType[26]).CircleXIcon;
    obj4[4] = function onPress() {
      if (closure_10) {
        let tmpResult = tmp(tmp2[24]);
        let obj = { location: null };
        obj[0] = closure_1_6;
        tmpResult.unblockUser(closure_3, obj);
        const result = closure_1_1(closure_1_2[27]).showUnblockSuccessToast(closure_3, closure_0);
        callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
        const obj5 = closure_1_1(closure_1_2[27]);
      } else {
        tmpResult = tmp(tmp2[28]);
        obj = { importer: null };
        obj[0] = function importer() {
          return closure_1_0(closure_1_2[18])(closure_1_2[29], closure_1_2.paths).then((arg0) => {
            closure_0 = arg0.default;
            return () => { ... };
          });
        };
        tmpResult.openLazy(obj);
      }
    };
    items[1] = obj4;
    let obj5 = { label: null, subLabel: null, icon: null, IconComponent: null, onPress: null };
    const intl11 = tmp(tmp2[13]).intl;
    obj5[0] = intl11.string(channelId(warningType[13]).t.X27yhD);
    const intl12 = tmp(tmp2[13]).intl;
    obj5[1] = intl12.string(channelId(warningType[13]).t["0tydOa"]);
    obj5[2] = warningId(warningType[30]);
    obj5[3] = channelId(warningType[31]).FlagIcon;
    obj5[4] = function onPress() {
      callback();
      const result = closure_1_0(closure_1_2[32]).showReportModalForInappropriateConversationSafetyAlert(closure_6);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
    };
    items[2] = obj5;
    obj3[1] = items;
    const items1 = [obj3, , ];
    const obj6 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl13 = tmp(tmp2[13]).intl;
    obj6[0] = intl13.string(channelId(warningType[13]).t.syuaPI);
    const intl14 = tmp(tmp2[13]).intl;
    obj6[1] = intl14.string(channelId(warningType[13]).t.LLBnNk);
    obj6[2] = warningId(warningType[33]);
    obj6[3] = channelId(warningType[34]).MusicIcon;
    obj6[4] = tmp4;
    obj6[5] = function onPress() {
      let obj = closure_1_1(closure_1_2[16]);
      obj.hideActionSheet();
      obj = {
        onClose() {

        }
      };
      closure_1_1(closure_1_2[35]).pushLazy(closure_1_0(closure_1_2[18])(closure_1_2[36], closure_1_2.paths), obj, closure_1_10);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    };
    const items2 = [obj6, , ];
    const obj7 = { label: null, subLabel: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl15 = tmp(tmp2[13]).intl;
    obj7[0] = intl15.string(channelId(warningType[13]).t["7LgVmt"]);
    const intl16 = tmp(tmp2[13]).intl;
    obj7[1] = intl16.string(channelId(warningType[13]).t.pwoRjc);
    obj7[2] = warningId(warningType[37]);
    obj7[3] = channelId(warningType[38]).EducationIcon;
    obj7[4] = tmp4;
    obj7[5] = function onPress() {
      closure_0 = closure_1_7(closure_0);
      let obj = closure_1_1(closure_1_2[16]);
      obj = {
        recipientId: closure_3,
        channelId: closure_0,
        warningId: closure_1,
        warningType: closure_2,
        onClose() {
          closure_1_1(closure_1_2[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(closure_1_0(closure_1_2[18])(closure_1_2[39], closure_1_2.paths), closure_1_7(closure_0), obj);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
    };
    items2[1] = obj7;
    if (!shouldShowHelplineLink) {
      if (shouldShowThroughlineLink) {
        obj1 = obj;
      }
      obj = obj1;
    }
    items2[2] = obj;
    items1[1] = { sectionKey: "support", buttons: items2 };
    const obj8 = { sectionKey: "info", buttons: null };
    const obj9 = { label: null, icon: null, IconComponent: null, trailing: null, onPress: null };
    const intl17 = tmp(tmp2[13]).intl;
    obj9[0] = intl17.string(channelId(warningType[13]).t.otdt24);
    obj9[1] = warningId(warningType[40]);
    obj9[2] = channelId(warningType[41]).ShieldIcon;
    obj9[3] = tmp4;
    obj9[4] = function onPress() {
      closure_0 = closure_1_7(closure_0);
      let obj = closure_1_1(closure_1_2[16]);
      obj = {
        recipientId: closure_3,
        channelId: closure_0,
        warningId: closure_1,
        warningType: closure_2,
        onClose() {
          closure_1_1(closure_1_2[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(closure_1_0(closure_1_2[18])(closure_1_2[42], closure_1_2.paths), closure_1_7(closure_0), obj);
      callback2(closure_1_0(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
    };
    const items3 = [obj9];
    obj8[1] = items3;
    items1[2] = obj8;
    return items1;
  }, items5);
  obj = { headerTitle: null, channelId: null, recipientId: null, warningId: null, warningType: null, onClose: null, children: null };
  let obj6 = channelId(warningType[10]);
  let intl = channelId(warningType[13]).intl;
  obj[0] = intl.string(channelId(warningType[13]).t.MAhAp6);
  obj[1] = channelId;
  obj[2] = recipientId;
  obj[3] = warningId;
  obj[4] = warningType;
  obj[5] = onClose;
  obj = {
    style: tmp.container,
    children: memo.map((buttons) => {
      let obj = { style: closure_5.actionRowGroup, children: null };
      obj = {
        hasIcons: true,
        children: buttons.map((arg0, arg1) => {
          ({ label, subLabel, IconComponent, icon, trailing, onPress, disabled } = arg0);
          return callback2(callback(6322).TableRow, { label, subLabel, onPress, trailing, disabled, icon: callback2(callback(6327).TableRowIcon, { source: icon, IconComponent }) }, arg1);
        })
      };
      buttons = buttons.buttons;
      obj[1] = stateFromStores1(channelId(warningType[44]).TableRowGroup, obj);
      return stateFromStores1(onClose, obj, buttons.sectionKey);
    })
  };
  obj[6] = stateFromStores1(onClose, obj);
  return stateFromStores1(warningId(warningType[43]), obj);
};