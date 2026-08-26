// === Module 10978: ? ===

// Module 10978
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 12, justifyContent: "center", alignItems: "center", flexDirection: "row", position: "relative" } });
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let canModerateRequestToSpeak;
  let actionBarPrimaryButton;
  importAllResult = undefined;
  closure_4 = undefined;
  let callback;
  callback = undefined;
  let obj = channel(actionBarPrimaryButton[4]);
  canModerateRequestToSpeak = obj.useCanModerateRequestToSpeak(channel.id);
  let tmp = callback2();
  let tmp2 = channel;
  const tmp3 = actionBarPrimaryButton;
  actionBarPrimaryButton = channel(actionBarPrimaryButton[5]).useActionBarPrimaryButton({ channel });
  let obj2 = channel(actionBarPrimaryButton[5]);
  const getActionBarHeight = channel(actionBarPrimaryButton[6]).useGetActionBarHeight(channel.id);
  const tmp7 = canModerateRequestToSpeak(actionBarPrimaryButton[7])(channel.id);
  importAllResult = tmp7;
  let obj3 = channel(actionBarPrimaryButton[6]);
  const tmp8 = channel(actionBarPrimaryButton[8]).useShowStageMusicMuteButton(channel.id) && !tmp7;
  closure_4 = tmp8;
  let obj4 = channel(actionBarPrimaryButton[8]);
  const isStageVideoEnabledResult = tmp2(tmp3[9]).isStageVideoEnabled(channel.guild_id);
  callback = isStageVideoEnabledResult;
  let items = [actionBarPrimaryButton, channel];
  callback = importAllResult.useCallback((arg0) => {
    if (actionBarPrimaryButton === channel(actionBarPrimaryButton[5]).ActionBarPrimaryButton.END_STREAM) {
      let obj = { channel: null, isSmallSize: null };
      obj[0] = channel;
      obj[1] = arg0;
      let tmp4 = _undefined(tmp2(tmp3[5]).DisconnectStreamButton, obj);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === tmp2(tmp3[5]).ActionBarPrimaryButton.END_CALL) {
        obj = { channel: null, isSmallSize: null };
        obj[0] = channel;
        obj[1] = arg0;
        tmp4 = _undefined(tmp2(tmp3[10]).DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  let items1 = [tmp8, channel, canModerateRequestToSpeak, tmp7, callback, isStageVideoEnabledResult];
  obj = {
    pointerEvents: "box-none",
    style: items2,
    children: importAllResult.useMemo(() => {
      if (closure_3) {
        let tmp24 = _undefined;
        if (_undefined) {
          let obj = { channel: null, isSmallSize: null };
          obj[0] = channel;
          obj[1] = tmp21;
          tmp24 = _undefined(channel(actionBarPrimaryButton[5]).VideoButton, obj);
        }
        const items = [tmp24, , , , ];
        obj = { channel: null, isSmallSize: null };
        obj[0] = channel;
        obj[1] = _undefined;
        items[1] = _undefined(channel(actionBarPrimaryButton[11]).ChannelCallMicButton, obj);
        obj1 = channel(actionBarPrimaryButton[10]);
        obj1 = { children: null };
        const obj2 = { channel: null, isSmallSize: null };
        obj2[0] = channel;
        obj2[1] = _undefined;
        items[2] = _undefined(canModerateRequestToSpeak ? obj1.RequestToSpeakListButton : obj1.MoveToAudienceButton, obj2);
        const obj3 = { channel: null, isSmallSize: null };
        obj3[0] = channel;
        obj3[1] = _undefined;
        items[3] = _undefined(channel(actionBarPrimaryButton[10]).ChatButton, obj3);
        items[4] = callback(_undefined);
        obj1[0] = items;
        closure_1_7(callback, obj1);
        const tmp22 = closure_1_7;
        const tmp23 = callback;
        const tmp33 = _undefined;
        const tmp37 = canModerateRequestToSpeak ? obj1.RequestToSpeakListButton : obj1.MoveToAudienceButton;
      } else {
        let tmp = closure_4;
        let tmp2 = closure_4;
        if (closure_4) {
          tmp2 = canModerateRequestToSpeak;
        }
        if (tmp) {
          obj = { channel: null, isSmallSize: null };
          obj[0] = channel;
          obj[1] = tmp2;
          tmp = _undefined(channel(actionBarPrimaryButton[10]).MusicMuteButton, obj);
        }
        const items1 = [tmp, , , , ];
        const obj4 = { channel: null, isSmallSize: null };
        obj4[0] = channel;
        obj4[1] = tmp2;
        items1[1] = _undefined(channel(actionBarPrimaryButton[10]).RequestToSpeakButton, obj4);
        let tmp13 = canModerateRequestToSpeak;
        if (canModerateRequestToSpeak) {
          const obj5 = { channel: null, isSmallSize: null };
          obj5[0] = tmp12;
          obj5[1] = tmp2;
          tmp13 = _undefined(channel(actionBarPrimaryButton[10]).RequestToSpeakListButton, obj5);
        }
        const obj6 = { children: null };
        items1[2] = tmp13;
        const obj7 = { channel: null, isSmallSize: null };
        obj7[0] = channel;
        obj7[1] = tmp2;
        items1[3] = _undefined(channel(actionBarPrimaryButton[10]).ChatButton, obj7);
        items1[4] = callback(tmp2);
        obj6[0] = items1;
        return closure_1_7(callback, obj6);
      }
    }, items1)
  };
  items2 = [tmp.container, { height: getActionBarHeight }];
  return callback(closure_4, obj);
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default memoResult;