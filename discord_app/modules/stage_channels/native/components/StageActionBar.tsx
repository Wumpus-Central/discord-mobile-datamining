// discord_app/modules/stage_channels/native/components/StageActionBar.tsx
import StageActionBarButtons from "StageActionBarButtons.tsx";
import ChannelCallActionBar from "../../../video_calls/native/components/ChannelCallActionBar.tsx";
import ChannelCallMicButton from "../../../video_calls/native/components/ChannelCallMicButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({
  container: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StageActionBar(channel) {
        const cResult = channel(576).c(61);
        channel = channel.channel;
        let tmp4 = closure_8();
        let obj = channel(576);
        const canModerateRequestToSpeak = channel(5890).useCanModerateRequestToSpeak(channel.id);
        if (cResult[0] !== channel) {
          const obj3 = { channel };
          cResult[0] = channel;
          cResult[1] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        let obj2 = channel(5890);
        const actionBarPrimaryButton = channel(11006).useActionBarPrimaryButton(tmp6);
        const tmpResult = channel(11006);
        const getActionBarHeight = channel(10980).useGetActionBarHeight(channel.id);
        const tmp9 = actionBarPrimaryButton(10837)(channel.id);
        const tmpResult5 = channel(10980);
        const tmp10 = channel(10939).useShowStageMusicMuteButton(channel.id) && !tmp9;
        if (cResult[2] !== channel.guild_id) {
          const isStageVideoEnabledResult = tmp(5892).isStageVideoEnabled(channel.guild_id);
          cResult[2] = channel.guild_id;
          cResult[3] = isStageVideoEnabledResult;
          let tmp11 = isStageVideoEnabledResult;
          const tmpResult7 = tmp(5892);
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] === channel) {
          if (cResult[5] === actionBarPrimaryButton) {
            let tmp13 = cResult[6];
          }
          if (tmp9) {
            if (cResult[7] === channel) {
              if (cResult[8] === tmp11) {
                if (cResult[9] === tmp11) {
                  let tmp33 = cResult[10];
                }
                if (cResult[11] === channel) {
                  if (cResult[12] === tmp11) {
                    let tmp36 = cResult[13];
                  }
                  if (cResult[14] === channel) {
                    if (cResult[15] === canModerateRequestToSpeak) {
                      if (cResult[16] === tmp11) {
                        if (cResult[18] === channel) {
                          if (cResult[19] === tmp11) {
                            let tmp43 = cResult[20];
                          }
                          if (cResult[21] === tmp13) {
                            if (cResult[22] === tmp11) {
                              let tmp46 = cResult[23];
                            }
                            if (cResult[24] === tmp33) {
                              if (cResult[25] === tmp36) {
                                if (cResult[26] === tmp39) {
                                  if (cResult[27] === tmp43) {
                                  }
                                }
                              }
                            }
                            const obj4 = { children: null };
                            const items = [tmp33, tmp36, tmp39, tmp43, tmp46];
                            obj4.children = items;
                            const tmp51 = closure_7(closure_6, obj4);
                            cResult[24] = tmp33;
                            cResult[25] = tmp36;
                            cResult[26] = tmp39;
                            cResult[27] = tmp43;
                            cResult[28] = tmp46;
                            cResult[29] = tmp51;
                          }
                          const tmp13Result = tmp13(tmp11);
                          cResult[21] = tmp13;
                          cResult[22] = tmp11;
                          cResult[23] = tmp13Result;
                          tmp46 = tmp13Result;
                        }
                        const obj5 = { channel, isSmallSize: tmp11 };
                        const tmp45 = closure_5(tmp(10936).ChatButton, obj5);
                        cResult[18] = channel;
                        cResult[19] = tmp11;
                        cResult[20] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                  }
                  let tmpResult8 = tmp(10936);
                  const obj6 = { channel, isSmallSize: tmp11 };
                  tmpResult8 = closure_5(
                    canModerateRequestToSpeak ? tmpResult8.RequestToSpeakListButton : tmpResult8.MoveToAudienceButton,
                    obj6,
                  );
                  cResult[14] = channel;
                  cResult[15] = canModerateRequestToSpeak;
                  cResult[16] = tmp11;
                  cResult[17] = tmpResult8;
                }
                const obj7 = { channel, isSmallSize: tmp11 };
                const tmp38 = closure_5(tmp(11061).ChannelCallMicButton, obj7);
                cResult[11] = channel;
                cResult[12] = tmp11;
                cResult[13] = tmp38;
                tmp36 = tmp38;
              }
            }
            let tmp34 = tmp11;
            if (tmp11) {
              const obj8 = { channel, isSmallSize: tmp11 };
              tmp34 = closure_5(tmp(11006).VideoButton, obj8);
            }
            cResult[7] = channel;
            cResult[8] = tmp11;
            cResult[9] = tmp11;
            cResult[10] = tmp34;
            tmp33 = tmp34;
          } else {
            let tmp14 = tmp10;
            if (tmp10) {
              tmp14 = canModerateRequestToSpeak;
            }
            if (cResult[30] === channel) {
              if (cResult[31] === tmp14) {
                if (cResult[32] === tmp10) {
                  let tmp15 = cResult[33];
                }
                if (cResult[34] === channel) {
                  if (cResult[35] === tmp14) {
                    let tmp18 = cResult[36];
                  }
                  if (cResult[37] === channel) {
                    if (cResult[38] === canModerateRequestToSpeak) {
                      if (cResult[39] === tmp14) {
                        let tmp21 = cResult[40];
                      }
                      if (cResult[41] === channel) {
                        if (cResult[42] === tmp14) {
                          let tmp24 = cResult[43];
                        }
                        if (cResult[44] === tmp13) {
                          if (cResult[45] === tmp14) {
                            let tmp27 = cResult[46];
                          }
                          if (cResult[47] === tmp15) {
                            if (cResult[48] === tmp18) {
                              if (cResult[49] === tmp21) {
                                if (cResult[50] === tmp24) {
                                  if (cResult[51] === tmp27) {
                                    let tmp29 = cResult[52];
                                  }
                                  if (cResult[53] !== getActionBarHeight) {
                                    const obj9 = { height: getActionBarHeight };
                                    cResult[53] = getActionBarHeight;
                                    cResult[54] = obj9;
                                    let tmp53 = obj9;
                                  } else {
                                    tmp53 = cResult[54];
                                  }
                                  if (cResult[55] === tmp4.container) {
                                    if (cResult[56] === tmp53) {
                                      let tmp54 = cResult[57];
                                    }
                                    if (cResult[58] === tmp29) {
                                      if (cResult[59] === tmp54) {
                                        let tmp55 = cResult[60];
                                      }
                                      return tmp55;
                                    }
                                    const obj10 = { pointerEvents: "box-none", style: tmp54, children: tmp29 };
                                    const tmp58 = closure_5(View, obj10);
                                    cResult[58] = tmp29;
                                    cResult[59] = tmp54;
                                    cResult[60] = tmp58;
                                    tmp55 = tmp58;
                                  }
                                  const items1 = [tmp4.container, tmp53];
                                  cResult[55] = tmp4.container;
                                  cResult[56] = tmp53;
                                  cResult[57] = items1;
                                  tmp54 = items1;
                                }
                              }
                            }
                          }
                          const obj11 = { children: null };
                          const items2 = [tmp15, tmp18, tmp21, tmp24, tmp27];
                          obj11.children = items2;
                          const tmp32 = closure_7(closure_6, obj11);
                          cResult[47] = tmp15;
                          cResult[48] = tmp18;
                          cResult[49] = tmp21;
                          cResult[50] = tmp24;
                          cResult[51] = tmp27;
                          cResult[52] = tmp32;
                          tmp29 = tmp32;
                        }
                        const tmp13Result2 = tmp13(tmp14);
                        cResult[44] = tmp13;
                        cResult[45] = tmp14;
                        cResult[46] = tmp13Result2;
                        tmp27 = tmp13Result2;
                      }
                      const obj12 = { channel, isSmallSize: tmp14 };
                      const tmp26 = closure_5(tmp(10936).ChatButton, obj12);
                      cResult[41] = channel;
                      cResult[42] = tmp14;
                      cResult[43] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                  let tmp22 = canModerateRequestToSpeak;
                  if (canModerateRequestToSpeak) {
                    const obj13 = { channel, isSmallSize: tmp14 };
                    tmp22 = closure_5(tmp(10936).RequestToSpeakListButton, obj13);
                  }
                  cResult[37] = channel;
                  cResult[38] = canModerateRequestToSpeak;
                  cResult[39] = tmp14;
                  cResult[40] = tmp22;
                  tmp21 = tmp22;
                }
                const obj14 = { channel, isSmallSize: tmp14 };
                const tmp20 = closure_5(tmp(10936).RequestToSpeakButton, obj14);
                cResult[34] = channel;
                cResult[35] = tmp14;
                cResult[36] = tmp20;
                tmp18 = tmp20;
              }
            }
            let tmp16 = tmp10;
            if (tmp10) {
              const obj15 = { channel, isSmallSize: tmp14 };
              tmp16 = closure_5(tmp(10936).MusicMuteButton, obj15);
            }
            cResult[30] = channel;
            cResult[31] = tmp14;
            cResult[32] = tmp10;
            cResult[33] = tmp16;
            tmp15 = tmp16;
          }
        }
        const fn = function _(isSmallSize) {
          if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
            const obj2 = { channel, isSmallSize };
            let tmp4 = hasOwnProperty(ChannelCallActionBar.DisconnectStreamButton, obj2);
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
        const tmpResult6 = channel(10939);
      }
    : function StageActionBar(channel) {
        channel = channel.channel;
        let actionBarPrimaryButton;
        let tmp = closure_8();
        let tmp2 = channel;
        const tmp3 = actionBarPrimaryButton;
        const canModerateRequestToSpeak = channel(actionBarPrimaryButton[6]).useCanModerateRequestToSpeak(channel.id);
        let obj = channel(actionBarPrimaryButton[6]);
        actionBarPrimaryButton = channel(actionBarPrimaryButton[7]).useActionBarPrimaryButton({ channel });
        let obj2 = channel(actionBarPrimaryButton[7]);
        const getActionBarHeight = channel(actionBarPrimaryButton[8]).useGetActionBarHeight(channel.id);
        const tmp7 = canModerateRequestToSpeak(actionBarPrimaryButton[9])(channel.id);
        noop = tmp7;
        let obj3 = channel(actionBarPrimaryButton[8]);
        const tmp8 = channel(actionBarPrimaryButton[10]).useShowStageMusicMuteButton(channel.id) && !tmp7;
        closure_4 = tmp8;
        let obj4 = channel(actionBarPrimaryButton[10]);
        const isStageVideoEnabledResult = tmp2(tmp3[11]).isStageVideoEnabled(channel.guild_id);
        c5 = isStageVideoEnabledResult;
        let items = [actionBarPrimaryButton, channel];
        const callback = noop.useCallback((isSmallSize) => {
          if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
            const obj2 = { channel, isSmallSize };
            let tmp4 = hasOwnProperty(ChannelCallActionBar.DisconnectStreamButton, obj2);
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
          style: null,
          children: noop.useMemo(() => {
            if (closure_3) {
              let tmp24 = isSmallSize;
              if (isSmallSize) {
                const obj2 = { channel, isSmallSize };
                tmp24 = hasOwnProperty(ChannelCallActionBar.VideoButton, obj2);
              }
              const items = [tmp24, , , ,];
              const obj3 = { channel, isSmallSize };
              items[1] = hasOwnProperty(ChannelCallMicButton.ChannelCallMicButton, obj3);
              const obj4 = { children: null };
              const obj5 = { channel, isSmallSize };
              items[2] = hasOwnProperty(
                canModerateRequestToSpeak ? obj4.RequestToSpeakListButton : obj4.MoveToAudienceButton,
                obj5,
              );
              const obj6 = { channel, isSmallSize };
              items[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj6);
              items[4] = callback(isSmallSize);
              obj4.children = items;
              React5(timestampProducer, obj4);
              const tmp37 = canModerateRequestToSpeak ? obj4.RequestToSpeakListButton : obj4.MoveToAudienceButton;
            } else {
              let tmp = closure_4;
              let tmp2 = closure_4;
              if (closure_4) {
                tmp2 = canModerateRequestToSpeak;
              }
              if (tmp) {
                const obj = { channel, isSmallSize: tmp2 };
                tmp = hasOwnProperty(StageActionBarButtons.MusicMuteButton, obj);
              }
              const items1 = [tmp, , , ,];
              const obj7 = { channel, isSmallSize: tmp2 };
              items1[1] = hasOwnProperty(StageActionBarButtons.RequestToSpeakButton, obj7);
              let tmp13 = canModerateRequestToSpeak;
              if (canModerateRequestToSpeak) {
                const obj8 = { channel, isSmallSize: tmp2 };
                tmp13 = hasOwnProperty(StageActionBarButtons.RequestToSpeakListButton, obj8);
              }
              const obj9 = { children: null };
              items1[2] = tmp13;
              const obj10 = { channel, isSmallSize: tmp2 };
              items1[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj10);
              items1[4] = callback(tmp2);
              obj9.children = items1;
              return React5(timestampProducer, obj9);
            }
          }, items1),
        };
        const items2 = [tmp.container, { height: getActionBarHeight }];
        obj5.style = items2;
        return c5(closure_4, obj5);
      },
);
