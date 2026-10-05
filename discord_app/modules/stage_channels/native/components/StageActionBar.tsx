// === Module 9624: StageActionBar ===

// Module 9624 (StageActionBar)
import react_native from "react-native" /* 17 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9558 */;
import ChannelCallActionBar from "ChannelCallActionBar" /* 9625 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 9686 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 12, justifyContent: "center", alignItems: "center", flexDirection: "row", position: "relative" } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let items1;
  let tmp11;
  let tmp6;
  let obj = channel(576);
  const cResult = obj.c(61);
  channel = channel.channel;
  let tmp4 = closure_8();
  let obj2 = channel(5572);
  const canModerateRequestToSpeak = obj2.useCanModerateRequestToSpeak(channel.id);
  if (cResult[0] !== channel) {
    const obj3 = { channel };
    cResult[0] = channel;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = channel(9625);
  const actionBarPrimaryButton = tmpResult.useActionBarPrimaryButton(tmp6);
  const tmpResult5 = channel(9604);
  const getActionBarHeight = tmpResult5.useGetActionBarHeight(channel.id);
  const tmp9 = actionBarPrimaryButton(9082)(channel.id);
  const tmpResult6 = channel(9561);
  const tmp10 = tmpResult6.useShowStageMusicMuteButton(channel.id) && !tmp9;
  if (cResult[2] !== channel.guild_id) {
    const tmpResult7 = channel(5574);
    const isStageVideoEnabledResult = tmpResult7.isStageVideoEnabled(channel.guild_id);
    cResult[2] = channel.guild_id;
    cResult[3] = isStageVideoEnabledResult;
    tmp11 = isStageVideoEnabledResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === channel) {
    let tmp13;
    let tmp29;
    let tmp52;
    if (cResult[5] === actionBarPrimaryButton) {
      tmp13 = cResult[6];
    }
    if (tmp9) {
      if (cResult[7] === channel) {
        if (cResult[8] === tmp11) {
          let tmp33;
          if (cResult[9] === tmp11) {
            tmp33 = cResult[10];
          }
          if (cResult[11] === channel) {
            let tmp36;
            if (cResult[12] === tmp11) {
              tmp36 = cResult[13];
            }
            if (cResult[14] === channel) {
              if (cResult[15] === canModerateRequestToSpeak) {
                let tmp39;
                if (cResult[16] === tmp11) {
                  tmp39 = cResult[17];
                }
                if (cResult[18] === channel) {
                  let tmp43;
                  if (cResult[19] === tmp11) {
                    tmp43 = cResult[20];
                  }
                  if (cResult[21] === tmp13) {
                    let tmp46;
                    if (cResult[22] === tmp11) {
                      tmp46 = cResult[23];
                    }
                    if (cResult[24] === tmp33) {
                      if (cResult[25] === tmp36) {
                        if (cResult[26] === tmp39) {
                          if (cResult[27] === tmp43) {
                            let tmp48;
                            if (cResult[28] === tmp46) {
                              tmp48 = cResult[29];
                            }
                            tmp29 = tmp48;
                          }
                        }
                      }
                    }
                    const obj4 = { children: items };
                    items = [tmp33, tmp36, tmp39, tmp43, tmp46];
                    const tmp51 = closure_7(closure_6, obj4);
                    cResult[24] = tmp33;
                    cResult[25] = tmp36;
                    cResult[26] = tmp39;
                    cResult[27] = tmp43;
                    cResult[28] = tmp46;
                    cResult[29] = tmp51;
                    tmp48 = tmp51;
                  }
                  const tmp13Result = tmp13(tmp11);
                  cResult[21] = tmp13;
                  cResult[22] = tmp11;
                  cResult[23] = tmp13Result;
                  tmp46 = tmp13Result;
                }
                const obj5 = { channel, isSmallSize: tmp11 };
                const tmp45 = closure_5(channel(9558).ChatButton, obj5);
                cResult[18] = channel;
                cResult[19] = tmp11;
                cResult[20] = tmp45;
                tmp43 = tmp45;
              }
            }
            const tmpResult8 = channel(9558);
            const obj6 = { channel, isSmallSize: tmp11 };
            const tmp40Result = closure_5(canModerateRequestToSpeak ? tmpResult8.RequestToSpeakListButton : tmpResult8.MoveToAudienceButton, obj6);
            cResult[14] = channel;
            cResult[15] = canModerateRequestToSpeak;
            cResult[16] = tmp11;
            cResult[17] = tmp40Result;
            tmp39 = tmp40Result;
          }
          const obj7 = { channel, isSmallSize: tmp11 };
          const tmp38 = closure_5(channel(9686).ChannelCallMicButton, obj7);
          cResult[11] = channel;
          cResult[12] = tmp11;
          cResult[13] = tmp38;
          tmp36 = tmp38;
        }
      }
      let tmp34 = tmp11;
      if (tmp34) {
        const obj8 = { channel, isSmallSize: tmp11 };
        tmp34 = closure_5(tmp(9625).VideoButton, obj8);
      }
      cResult[7] = channel;
      cResult[8] = tmp11;
      cResult[9] = tmp11;
      cResult[10] = tmp34;
      tmp33 = tmp34;
    } else {
      if (cResult[30] === channel) {
        if (cResult[31] === (tmp10 && canModerateRequestToSpeak)) {
          let tmp15;
          if (cResult[32] === tmp10) {
            tmp15 = cResult[33];
          }
          if (cResult[34] === channel) {
            let tmp18;
            if (cResult[35] === (tmp10 && canModerateRequestToSpeak)) {
              tmp18 = cResult[36];
            }
            if (cResult[37] === channel) {
              if (cResult[38] === canModerateRequestToSpeak) {
                let tmp21;
                if (cResult[39] === (tmp10 && canModerateRequestToSpeak)) {
                  tmp21 = cResult[40];
                }
                if (cResult[41] === channel) {
                  let tmp24;
                  if (cResult[42] === (tmp10 && canModerateRequestToSpeak)) {
                    tmp24 = cResult[43];
                  }
                  if (cResult[44] === tmp13) {
                    let tmp27;
                    if (cResult[45] === (tmp10 && canModerateRequestToSpeak)) {
                      tmp27 = cResult[46];
                    }
                    if (cResult[47] === tmp15) {
                      if (cResult[48] === tmp18) {
                        if (cResult[49] === tmp21) {
                          if (cResult[50] === tmp24) {
                            if (cResult[51] === tmp27) {
                              tmp29 = cResult[52];
                            }
                          }
                        }
                      }
                    }
                    const obj9 = { children: items1 };
                    items1 = [tmp15, tmp18, tmp21, tmp24, tmp27];
                    const tmp32 = closure_7(closure_6, obj9);
                    cResult[47] = tmp15;
                    cResult[48] = tmp18;
                    cResult[49] = tmp21;
                    cResult[50] = tmp24;
                    cResult[51] = tmp27;
                    cResult[52] = tmp32;
                    tmp29 = tmp32;
                  }
                  const tmp13Result2 = tmp13(tmp10 && canModerateRequestToSpeak);
                  cResult[44] = tmp13;
                  cResult[45] = tmp10 && canModerateRequestToSpeak;
                  cResult[46] = tmp13Result2;
                  tmp27 = tmp13Result2;
                }
                const obj10 = { channel, isSmallSize: tmp10 && canModerateRequestToSpeak };
                const tmp26 = closure_5(channel(9558).ChatButton, obj10);
                cResult[41] = channel;
                cResult[42] = tmp10 && canModerateRequestToSpeak;
                cResult[43] = tmp26;
                tmp24 = tmp26;
              }
            }
            let tmp22 = canModerateRequestToSpeak;
            if (tmp22) {
              const obj11 = { channel, isSmallSize: tmp10 && canModerateRequestToSpeak };
              tmp22 = closure_5(tmp(9558).RequestToSpeakListButton, obj11);
            }
            cResult[37] = channel;
            cResult[38] = canModerateRequestToSpeak;
            cResult[39] = tmp10 && canModerateRequestToSpeak;
            cResult[40] = tmp22;
            tmp21 = tmp22;
          }
          const obj12 = { channel, isSmallSize: tmp10 && canModerateRequestToSpeak };
          const tmp20 = closure_5(channel(9558).RequestToSpeakButton, obj12);
          cResult[34] = channel;
          cResult[35] = tmp10 && canModerateRequestToSpeak;
          cResult[36] = tmp20;
          tmp18 = tmp20;
        }
      }
      let tmp16 = tmp10;
      if (tmp16) {
        const obj13 = { channel, isSmallSize: tmp10 && canModerateRequestToSpeak };
        tmp16 = closure_5(tmp(9558).MusicMuteButton, obj13);
      }
      cResult[30] = channel;
      cResult[31] = tmp10 && canModerateRequestToSpeak;
      cResult[32] = tmp10;
      cResult[33] = tmp16;
      tmp15 = tmp16;
    }
    if (cResult[53] !== getActionBarHeight) {
      const obj14 = { height: getActionBarHeight };
      cResult[53] = getActionBarHeight;
      cResult[54] = obj14;
      tmp52 = obj14;
    } else {
      tmp52 = cResult[54];
    }
    if (cResult[55] === tmp4.container) {
      let tmp53;
      if (cResult[56] === tmp52) {
        tmp53 = cResult[57];
      }
      if (cResult[58] === tmp29) {
        let tmp54;
        if (cResult[59] === tmp53) {
          tmp54 = cResult[60];
        }
        return tmp54;
      }
      const obj15 = { pointerEvents: "box-none", style: tmp53, children: tmp29 };
      const tmp57 = closure_5(View, obj15);
      cResult[58] = tmp29;
      cResult[59] = tmp53;
      cResult[60] = tmp57;
      tmp54 = tmp57;
    }
    const items2 = [tmp4.container, tmp52];
    cResult[55] = tmp4.container;
    cResult[56] = tmp52;
    cResult[57] = items2;
    tmp53 = items2;
  }
  const fn = function _(isSmallSize) {
    let tmp4;
    if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
      const obj2 = { channel, isSmallSize };
      tmp4 = hasOwnProperty(ChannelCallActionBar.DisconnectStreamButton, obj2);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_CALL) {
        const obj = { channel, isSmallSize };
        tmp4 = hasOwnProperty(StageActionBarButtons.DisconnectStageButton, obj);
      }
    }
    return tmp4;
  };
  cResult[4] = channel;
  cResult[5] = actionBarPrimaryButton;
  cResult[6] = fn;
  tmp13 = fn;
}) : ((channel) => {
  let closure_3;
  let isSmallSize;
  let items2;
  channel = channel.channel;
  let actionBarPrimaryButton;
  let tmp2 = channel;
  const tmp = closure_8();
  let obj = channel(actionBarPrimaryButton[6]);
  const canModerateRequestToSpeak = obj.useCanModerateRequestToSpeak(channel.id);
  let obj2 = channel(actionBarPrimaryButton[7]);
  const tmp3 = actionBarPrimaryButton;
  actionBarPrimaryButton = obj2.useActionBarPrimaryButton({ channel });
  let obj3 = channel(actionBarPrimaryButton[8]);
  const getActionBarHeight = obj3.useGetActionBarHeight(channel.id);
  const tmp7 = canModerateRequestToSpeak(actionBarPrimaryButton[9])(channel.id);
  react = tmp7;
  let obj4 = channel(actionBarPrimaryButton[10]);
  const tmp8 = obj4.useShowStageMusicMuteButton(channel.id) && !tmp7;
  let closure_4 = tmp8;
  const tmp2Result = tmp2(tmp3[11]);
  const isStageVideoEnabledResult = tmp2Result.isStageVideoEnabled(channel.guild_id);
  let c5 = isStageVideoEnabledResult;
  let items = [actionBarPrimaryButton, channel];
  const callback = react.useCallback((isSmallSize) => {
    let tmp4;
    if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
      const obj2 = { channel, isSmallSize };
      tmp4 = hasOwnProperty(ChannelCallActionBar.DisconnectStreamButton, obj2);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_CALL) {
        const obj = { channel, isSmallSize };
        tmp4 = hasOwnProperty(StageActionBarButtons.DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  let items1 = [tmp8, channel, canModerateRequestToSpeak, tmp7, callback, isStageVideoEnabledResult];
  let obj5 = {
    pointerEvents: "box-none",
    style: items2,
    children: react.useMemo(() => {
      let tmp4Result;
      if (closure_3) {
        let tmp26 = isSmallSize;
        if (tmp26) {
          const obj2 = { channel, isSmallSize };
          tmp26 = hasOwnProperty(ChannelCallActionBar.VideoButton, obj2);
        }
        const items = [tmp26, , , , ];
        const obj3 = { channel, isSmallSize };
        items[1] = hasOwnProperty(ChannelCallMicButton.ChannelCallMicButton, obj3);
        const tmp39 = StageActionBarButtons;
        const obj4 = { children: items };
        const obj5 = { channel, isSmallSize };
        items[2] = hasOwnProperty(canModerateRequestToSpeak ? tmp39.RequestToSpeakListButton : tmp39.MoveToAudienceButton, obj5);
        const obj6 = { channel, isSmallSize };
        items[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj6);
        items[4] = callback(isSmallSize);
        tmp4Result = metroImportDefault(metroRequire, obj4);
      } else {
        let tmp2 = closure_4;
        if (tmp2) {
          const obj = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
          tmp2 = hasOwnProperty(StageActionBarButtons.MusicMuteButton, obj);
        }
        const items1 = [tmp2, , , , ];
        const obj7 = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
        items1[1] = hasOwnProperty(StageActionBarButtons.RequestToSpeakButton, obj7);
        let tmp14 = canModerateRequestToSpeak;
        if (tmp14) {
          const obj8 = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
          tmp14 = hasOwnProperty(StageActionBarButtons.RequestToSpeakListButton, obj8);
        }
        const obj9 = { children: items1 };
        items1[2] = tmp14;
        const obj10 = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
        items1[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj10);
        items1[4] = callback(closure_4 && canModerateRequestToSpeak);
        tmp4Result = metroImportDefault(metroRequire, obj9);
      }
      return tmp4Result;
    }, items1)
  };
  items2 = [tmp.container, { height: getActionBarHeight }];
  return c5(closure_4, obj5);
}));
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default memoResult;