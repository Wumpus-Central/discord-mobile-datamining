// discord_app/modules/stage_channels/native/components/StageActionBar.tsx
import StageActionBarButtons from "StageActionBarButtons.tsx";
import ChannelCallActionBar from "../../../video_calls/native/components/ChannelCallActionBar.tsx";
import ChannelCallMicButton from "../../../video_calls/native/components/ChannelCallMicButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  container: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  let actionBarPrimaryButton;
  let obj = channel(actionBarPrimaryButton[4]);
  const canModerateRequestToSpeak = obj.useCanModerateRequestToSpeak(channel.id);
  let tmp = closure_8();
  let tmp2 = channel;
  const tmp3 = actionBarPrimaryButton;
  actionBarPrimaryButton = channel(actionBarPrimaryButton[5]).useActionBarPrimaryButton({ channel });
  let obj2 = channel(actionBarPrimaryButton[5]);
  const getActionBarHeight = channel(actionBarPrimaryButton[6]).useGetActionBarHeight(channel.id);
  const tmp7 = canModerateRequestToSpeak(actionBarPrimaryButton[7])(channel.id);
  noop = tmp7;
  let obj3 = channel(actionBarPrimaryButton[6]);
  const tmp8 = channel(actionBarPrimaryButton[8]).useShowStageMusicMuteButton(channel.id) && !tmp7;
  closure_4 = tmp8;
  let obj4 = channel(actionBarPrimaryButton[8]);
  const isStageVideoEnabledResult = tmp2(tmp3[9]).isStageVideoEnabled(channel.guild_id);
  c5 = isStageVideoEnabledResult;
  let items = [actionBarPrimaryButton, channel];
  const callback = noop.useCallback((isSmallSize) => {
    if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
      let obj = { channel, isSmallSize };
      let tmp4 = hasOwnProperty(tmp2(9945).DisconnectStreamButton, obj);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === tmp2(9945).ActionBarPrimaryButton.END_CALL) {
        obj = { channel, isSmallSize };
        tmp4 = hasOwnProperty(tmp2(9898).DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  let items1 = [tmp8, channel, canModerateRequestToSpeak, tmp7, callback, isStageVideoEnabledResult];
  obj = {
    pointerEvents: "box-none",
    style: null,
    children: noop.useMemo(() => {
      if (closure_3) {
        let tmp24 = isSmallSize;
        if (isSmallSize) {
          let obj = { channel, isSmallSize: tmp21 };
          tmp24 = hasOwnProperty(ChannelCallActionBar.VideoButton, obj);
        }
        const items = [tmp24, , , ,];
        obj = { channel, isSmallSize };
        items[1] = hasOwnProperty(ChannelCallMicButton.ChannelCallMicButton, obj);
        const obj1 = { children: null };
        const obj2 = { channel, isSmallSize };
        items[2] = hasOwnProperty(
          canModerateRequestToSpeak ? obj1.RequestToSpeakListButton : obj1.MoveToAudienceButton,
          obj2,
        );
        const obj3 = { channel, isSmallSize };
        items[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj3);
        items[4] = callback(isSmallSize);
        obj1.children = items;
        React5(timestampProducer, obj1);
        const tmp37 = canModerateRequestToSpeak ? obj1.RequestToSpeakListButton : obj1.MoveToAudienceButton;
      } else {
        let tmp = closure_4;
        let tmp2 = closure_4;
        if (closure_4) {
          tmp2 = canModerateRequestToSpeak;
        }
        if (tmp) {
          obj = { channel, isSmallSize: tmp2 };
          tmp = hasOwnProperty(StageActionBarButtons.MusicMuteButton, obj);
        }
        const items1 = [tmp, , , ,];
        const obj4 = { channel, isSmallSize: tmp2 };
        items1[1] = hasOwnProperty(StageActionBarButtons.RequestToSpeakButton, obj4);
        let tmp13 = canModerateRequestToSpeak;
        if (canModerateRequestToSpeak) {
          const obj5 = { channel: tmp12, isSmallSize: tmp2 };
          tmp13 = hasOwnProperty(StageActionBarButtons.RequestToSpeakListButton, obj5);
        }
        const obj6 = { children: null };
        items1[2] = tmp13;
        const obj7 = { channel, isSmallSize: tmp2 };
        items1[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj7);
        items1[4] = callback(tmp2);
        obj6.children = items1;
        return React5(timestampProducer, obj6);
      }
    }, items1),
  };
  const items2 = [tmp.container, { height: getActionBarHeight }];
  obj.style = items2;
  return c5(closure_4, obj);
});
