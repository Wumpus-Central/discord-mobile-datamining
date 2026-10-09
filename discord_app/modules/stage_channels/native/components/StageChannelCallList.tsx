// discord_app/modules/stage_channels/native/components/StageChannelCallList.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import UserSummaryItemDefault from "../../../../components_native/common/UserSummaryItem.tsx";
import SpeakerTile from "SpeakerTile.tsx";
import StageSectionHeaderDefault from "StageSectionHeader.tsx";
import StageGridRowDefault from "StageGridRow.tsx";
import AudienceGridRowDefault from "AudienceGridRow.tsx";
import useStageChannelGridParticipants from "../../useStageChannelGridParticipants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StageChannelListStore = fn(11118);
({ useActiveSpeakerPillScrollHandler: hasOwnProperty, useActiveSpeakerPillState: metroRequire } =
  StageChannelListStore);
const MAX_AUDIENCE_ROW_LIMIT = fn(5889).MAX_AUDIENCE_ROW_LIMIT;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { direction: fn(1200).CutoutDirection.RIGHT, radius: 13, inset: -6 };
let users = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StageChannelCallListRenderer(channel) {
        const cResult = channel(collapsed[9]).c(43);
        channel = channel.channel;
        ({ listSections, rowsBySection } = channel);
        [collapsed, _slicedToArray] = first1.useState(false);
        [first1, closure_5] = first1.useState(false);
        const tmp8 = _slicedToArray(closure_6(), 2);
        closure_6 = tmp8[0];
        closure_7 = tmp9;
        const first2 = _slicedToArray(closure_5(), 1)[0];
        if (cResult[0] !== tmp8[1]) {
          const fn = function s() {
            return () => {
              closure_1_7(false);
            };
          };
          cResult[0] = tmp9;
          cResult[1] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[1];
        }
        rowsBySection(collapsed[10])(tmp11);
        let num2 = listSections[users.STREAM];
        if (num2 == null) {
          num2 = 1;
        }
        const bound = Math.max(num2, 1);
        let num3 = listSections[tmp13.SPEAKER];
        if (num3 == null) {
          num3 = 1;
        }
        const bound1 = Math.max(num3, 1);
        if (cResult[2] === bound) {
          if (cResult[3] === bound1) {
            const actualStageSpeakerCount = tmp(tmp2[11]).useActualStageSpeakerCount(channel.id);
            const tmpResult = tmp(tmp2[11]);
            const stageParticipantsCount = tmp(tmp2[11]).useStageParticipantsCount(
              channel.id,
              tmp(tmp2[7]).StageChannelParticipantNamedIndex.AUDIENCE,
            );
            if (cResult[6] === stageParticipantsCount) {
              if (cResult[7] === actualStageSpeakerCount) {
                let tmp20 = cResult[8];
              }
              cutout = tmp20;
              if (cResult[9] === collapsed) {
                if (cResult[10] === tmp20) {
                  if (cResult[11] === rowsBySection) {
                    class G {
                      constructor(arg0, arg1) {
                        if (null == arg1) {
                          num9 = 0;
                          return 0;
                        } else {
                          tmp24 = channel;
                          num10 = 0;
                          num = 0;
                          if (0 === arg1) {
                            tmp = closure_10;
                            num = closure_10(channel);
                          }
                          tmp2 = closure_11;
                          if (closure_11.STREAM === channel) {
                            tmp20 = rowsBySection;
                            sum = num;
                            if (null != rowsBySection[channel][arg1]) {
                              tmp22 = closure_0;
                              tmp23 = closure_2;
                              num8 = 8;
                              sum = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                            }
                            return sum;
                          } else if (tmp2.SPEAKER === channel) {
                            if (null == rowsBySection[channel][arg1]) {
                              return num;
                            } else {
                              length = tmp8[channel][arg1].length;
                              if (arg1 > 0) {
                                tmp16 = closure_0;
                                tmp17 = closure_2;
                                num7 = 8;
                                sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                              } else {
                                num11 = 1;
                                if (1 === length) {
                                  tmp14 = closure_0;
                                  tmp15 = closure_2;
                                  num6 = 8;
                                  sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8;
                                } else {
                                  num3 = 2;
                                  if (2 === length) {
                                    tmp12 = closure_0;
                                    tmp13 = closure_2;
                                    num5 = 8;
                                    sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.HALF + 8;
                                  } else {
                                    tmp9 = closure_0;
                                    tmp10 = closure_2;
                                    num4 = 8;
                                    sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                  }
                                }
                              }
                              tmp18 = closure_4;
                              sum2 = num;
                              if (!closure_4) {
                                sum2 = sum1 + num;
                              }
                              return sum2;
                            }
                          } else if (tmp2.AUDIENCE === channel) {
                            tmp6 = closure_2;
                            sum3 = num;
                            if (!closure_2) {
                              num2 = 102;
                              sum3 = 102 + num;
                            }
                            return sum3;
                          } else {
                            tmp3 = closure_1;
                            tmp4 = closure_2;
                            str = "Section Not Found";
                            tmp5 = closure_1(closure_2[12])(null != channel, "Section Not Found");
                            return 0;
                          }
                        }
                      }
                    }
                    const stageParticipants = tmp(tmp2[11]).useStageParticipants(
                      tmp22,
                      tmp(tmp2[7]).StageChannelParticipantNamedIndex.SPEAKER,
                    );
                    if (cResult[14] !== stageParticipants) {
                      const _Symbol = Symbol;
                      class G {
                        constructor(arg0, arg1) {
                          if (null == arg1) {
                            num9 = 0;
                            return 0;
                          } else {
                            tmp24 = channel;
                            num10 = 0;
                            num = 0;
                            if (0 === arg1) {
                              tmp = closure_10;
                              num = closure_10(channel);
                            }
                            tmp2 = closure_11;
                            if (closure_11.STREAM === channel) {
                              tmp20 = rowsBySection;
                              sum = num;
                              if (null != rowsBySection[channel][arg1]) {
                                tmp22 = closure_0;
                                tmp23 = closure_2;
                                num8 = 8;
                                sum = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                              }
                              return sum;
                            } else if (tmp2.SPEAKER === channel) {
                              if (null == rowsBySection[channel][arg1]) {
                                return num;
                              } else {
                                length = tmp8[channel][arg1].length;
                                if (arg1 > 0) {
                                  tmp16 = closure_0;
                                  tmp17 = closure_2;
                                  num7 = 8;
                                  sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                } else {
                                  num11 = 1;
                                  if (1 === length) {
                                    tmp14 = closure_0;
                                    tmp15 = closure_2;
                                    num6 = 8;
                                    sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8;
                                  } else {
                                    num3 = 2;
                                    if (2 === length) {
                                      tmp12 = closure_0;
                                      tmp13 = closure_2;
                                      num5 = 8;
                                      sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.HALF + 8;
                                    } else {
                                      tmp9 = closure_0;
                                      tmp10 = closure_2;
                                      num4 = 8;
                                      sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                    }
                                  }
                                }
                                tmp18 = closure_4;
                                sum2 = num;
                                if (!closure_4) {
                                  sum2 = sum1 + num;
                                }
                                return sum2;
                              }
                            } else if (tmp2.AUDIENCE === channel) {
                              tmp6 = closure_2;
                              sum3 = num;
                              if (!closure_2) {
                                num2 = 102;
                                sum3 = 102 + num;
                              }
                              return sum3;
                            } else {
                              tmp3 = closure_1;
                              tmp4 = closure_2;
                              str = "Section Not Found";
                              tmp5 = closure_1(closure_2[12])(null != channel, "Section Not Found");
                              return 0;
                            }
                          }
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        class V {
                          constructor(arg0) {
                            return channel.user;
                          }
                        }
                        cResult[17] = V;
                        class G {
                          constructor(arg0, arg1) {
                            if (null == arg1) {
                              num9 = 0;
                              return 0;
                            } else {
                              tmp24 = channel;
                              num10 = 0;
                              num = 0;
                              if (0 === arg1) {
                                tmp = closure_10;
                                num = closure_10(channel);
                              }
                              tmp2 = closure_11;
                              if (closure_11.STREAM === channel) {
                                tmp20 = rowsBySection;
                                sum = num;
                                if (null != rowsBySection[channel][arg1]) {
                                  tmp22 = closure_0;
                                  tmp23 = closure_2;
                                  num8 = 8;
                                  sum = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                                }
                                return sum;
                              } else if (tmp2.SPEAKER === channel) {
                                if (null == rowsBySection[channel][arg1]) {
                                  return num;
                                } else {
                                  length = tmp8[channel][arg1].length;
                                  if (arg1 > 0) {
                                    tmp16 = closure_0;
                                    tmp17 = closure_2;
                                    num7 = 8;
                                    sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                  } else {
                                    num11 = 1;
                                    if (1 === length) {
                                      tmp14 = closure_0;
                                      tmp15 = closure_2;
                                      num6 = 8;
                                      sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8;
                                    } else {
                                      num3 = 2;
                                      if (2 === length) {
                                        tmp12 = closure_0;
                                        tmp13 = closure_2;
                                        num5 = 8;
                                        sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.HALF + 8;
                                      } else {
                                        tmp9 = closure_0;
                                        tmp10 = closure_2;
                                        num4 = 8;
                                        sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                      }
                                    }
                                  }
                                  tmp18 = closure_4;
                                  sum2 = num;
                                  if (!closure_4) {
                                    sum2 = sum1 + num;
                                  }
                                  return sum2;
                                }
                              } else if (tmp2.AUDIENCE === channel) {
                                tmp6 = closure_2;
                                sum3 = num;
                                if (!closure_2) {
                                  num2 = 102;
                                  sum3 = 102 + num;
                                }
                                return sum3;
                              } else {
                                tmp3 = closure_1;
                                tmp4 = closure_2;
                                str = "Section Not Found";
                                tmp5 = closure_1(closure_2[12])(null != channel, "Section Not Found");
                                return 0;
                              }
                            }
                          }
                        }
                      } else {
                        class V {
                          constructor(arg0) {
                            return channel.user;
                          }
                        }
                      }
                      found = stageParticipants.filter(found);
                      const mapped = found.map(tmp25);
                      cResult[14] = stageParticipants;
                      cResult[15] = mapped;
                    } else {
                      class V {
                        constructor(arg0) {
                          return channel.user;
                        }
                      }
                      users = tmp23;
                      if (cResult[18] === collapsed) {
                        class V {
                          constructor(arg0) {
                            return channel.user;
                          }
                        }
                      }
                      class J {
                        constructor(arg0) {
                          tmp = closure_11;
                          if (closure_11.STREAM === channel) {
                            tmp20 = null;
                            return null;
                          } else if (tmp.AUDIENCE === channel) {
                            num2 = 0;
                            tmp13 = null;
                            if (0 !== closure_9) {
                              tmp14 = jsx;
                              tmp15 = closure_1;
                              tmp16 = closure_2;
                              obj1 = { label: null, count: null, onToggleCollapse: null, collapsed: null };
                              tmp18 = closure_0;
                              tmp17 = closure_1(closure_2[13]);
                              intl = closure_0(closure_2[14]).intl;
                              obj1.label = intl.string(closure_0(closure_2[14]).t["3foUu5"]);
                              obj1.count = tmp12;
                              obj1.onToggleCollapse = function onToggleCollapse() {
                                return closure_1_3(!collapsed);
                              };
                              tmp19 = closure_2;
                              obj1.collapsed = closure_2;
                              tmp13 = jsx(tmp17, obj1);
                            }
                            return tmp13;
                          } else if (tmp.SPEAKER === channel) {
                            num = 0;
                            tmp21Result1 = null;
                            if (0 !== closure_8) {
                              tmp21 = jsx;
                              tmp23 = closure_2;
                              tmp22 = closure_1;
                              obj4 = {
                                label: null,
                                count: null,
                                onToggleCollapse: null,
                                collapsed: null,
                                children: null,
                              };
                              tmp24 = closure_1(closure_2[13]);
                              tmp25 = closure_0;
                              intl2 = closure_0(closure_2[14]).intl;
                              obj4.label = intl2.string(closure_0(closure_2[14]).t.CduOkx);
                              obj4.count = tmp6;
                              obj4.onToggleCollapse = function onToggleCollapse() {
                                return closure_1_5(!first1);
                              };
                              tmp26 = closure_4;
                              obj4.collapsed = closure_4;
                              tmp21Result = undefined;
                              if (closure_4) {
                                obj = { users: null, max: 10, avatarSize: null, cutout: null };
                                tmp9 = closure_11;
                                obj.users = closure_11;
                                tmp22Result = tmp22(tmp23[15]);
                                obj.avatarSize = tmp25(tmp23[5]).AvatarSizes.XSMALL_20;
                                tmp10 = closure_10;
                                obj.cutout = closure_10;
                                tmp21Result = tmp21(tmp22Result, obj);
                              }
                              obj4.children = tmp21Result;
                              tmp21Result1 = tmp21(tmp24, obj4);
                            }
                            return tmp21Result1;
                          } else {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            tmp4 = null;
                            str = "Section Not Found";
                            tmp5 = closure_1(closure_2[12])(null != channel, "Section Not Found");
                            return null;
                          }
                        }
                      }
                      cResult[18] = collapsed;
                      cResult[19] = stageParticipantsCount;
                      cResult[20] = actualStageSpeakerCount;
                      cResult[21] = tmp23;
                      cResult[22] = first1;
                      cResult[23] = J;
                    }
                    const tmpResult4 = tmp(tmp2[11]);
                  }
                }
              }
              class G {
                constructor(arg0, arg1) {
                  if (null == arg1) {
                    num9 = 0;
                    return 0;
                  } else {
                    tmp24 = channel;
                    num10 = 0;
                    num = 0;
                    if (0 === arg1) {
                      tmp = closure_10;
                      num = closure_10(channel);
                    }
                    tmp2 = closure_11;
                    if (closure_11.STREAM === channel) {
                      tmp20 = rowsBySection;
                      sum = num;
                      if (null != rowsBySection[channel][arg1]) {
                        tmp22 = closure_0;
                        tmp23 = closure_2;
                        num8 = 8;
                        sum = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                      }
                      return sum;
                    } else if (tmp2.SPEAKER === channel) {
                      if (null == rowsBySection[channel][arg1]) {
                        return num;
                      } else {
                        length = tmp8[channel][arg1].length;
                        if (arg1 > 0) {
                          tmp16 = closure_0;
                          tmp17 = closure_2;
                          num7 = 8;
                          sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                        } else {
                          num11 = 1;
                          if (1 === length) {
                            tmp14 = closure_0;
                            tmp15 = closure_2;
                            num6 = 8;
                            sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.FULL + 8;
                          } else {
                            num3 = 2;
                            if (2 === length) {
                              tmp12 = closure_0;
                              tmp13 = closure_2;
                              num5 = 8;
                              sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.HALF + 8;
                            } else {
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              num4 = 8;
                              sum1 = closure_0(closure_2[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
                            }
                          }
                        }
                        tmp18 = closure_4;
                        sum2 = num;
                        if (!closure_4) {
                          sum2 = sum1 + num;
                        }
                        return sum2;
                      }
                    } else if (tmp2.AUDIENCE === channel) {
                      tmp6 = closure_2;
                      sum3 = num;
                      if (!closure_2) {
                        num2 = 102;
                        sum3 = 102 + num;
                      }
                      return sum3;
                    } else {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      str = "Section Not Found";
                      tmp5 = closure_1(closure_2[12])(null != channel, "Section Not Found");
                      return 0;
                    }
                  }
                }
              }
              cResult[9] = collapsed;
              cResult[10] = tmp20;
              cResult[11] = rowsBySection;
              cResult[12] = first1;
              cResult[13] = G;
            }
            const fn2 = function y(arg0) {
              if (users.STREAM === arg0) {
                return 0;
              } else if (users.SPEAKER === arg0) {
                let num4 = 48;
                if (0 === actualStageSpeakerCount) {
                  num4 = 0;
                }
                return num4;
              } else if (users.AUDIENCE === arg0) {
                let num2 = 48;
                if (0 === stageParticipantsCount) {
                  num2 = 0;
                }
                return num2;
              } else {
                _modDef38(null != arg0, "Section Not Found");
                return 0;
              }
            };
            cResult[6] = stageParticipantsCount;
            cResult[7] = actualStageSpeakerCount;
            cResult[8] = fn2;
            tmp20 = fn2;
            const tmpResult3 = tmp(tmp2[11]);
          }
        }
        let items = [bound, bound1, listSections[users.AUDIENCE]];
        cResult[2] = bound;
        cResult[3] = bound1;
        cResult[4] = listSections[users.AUDIENCE];
        cResult[5] = items;
        let obj = channel(collapsed[9]);
      }
    : function StageChannelCallListRenderer(channel) {
        channel = channel.channel;
        const listSections = channel.listSections;
        const rowsBySection = channel.rowsBySection;
        collapsed = undefined;
        let tmp = collapsed(collapsed.useState(false), 2);
        collapsed = tmp3;
        let tmp4 = collapsed(collapsed.useState(false), 2);
        const first1 = tmp4[0];
        closure_6 = tmp6;
        const tmp7 = collapsed(closure_6(), 2);
        const first2 = tmp7[0];
        closure_8 = tmp9;
        listSections(rowsBySection[10])(() => () => {
          closure_1_8(false);
        });
        let items = [listSections];
        const sections = collapsed.useMemo(() => {
          let num = listSections[stageParticipantsCount.STREAM];
          if (num == null) {
            num = 1;
          }
          const items = [Math.max(num, 1), ,];
          let num2 = listSections[stageParticipantsCount.SPEAKER];
          if (num2 == null) {
            num2 = 1;
          }
          items[1] = Math.max(num2, 1);
          items[2] = listSections[stageParticipantsCount.AUDIENCE];
          return items;
        }, items);
        const actualStageSpeakerCount = channel(rowsBySection[11]).useActualStageSpeakerCount(channel.id);
        let obj = channel(rowsBySection[11]);
        const stageParticipantsCount = channel(rowsBySection[11]).useStageParticipantsCount(
          channel.id,
          channel(rowsBySection[7]).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        let items1 = [actualStageSpeakerCount, stageParticipantsCount];
        const callback = collapsed.useCallback((arg0) => {
          if (stageParticipantsCount.STREAM === arg0) {
            return 0;
          } else if (stageParticipantsCount.SPEAKER === arg0) {
            let num4 = 48;
            if (0 === actualStageSpeakerCount) {
              num4 = 0;
            }
            return num4;
          } else if (stageParticipantsCount.AUDIENCE === arg0) {
            let num2 = 48;
            if (0 === stageParticipantsCount) {
              num2 = 0;
            }
            return num2;
          } else {
            _modDef38(null != arg0, "Section Not Found");
            return 0;
          }
        }, items1);
        const items2 = [callback, rowsBySection, collapsed, first1];
        const itemSize = collapsed.useCallback((arg0, arg1) => {
          if (null == arg1) {
            return 0;
          } else {
            let num = 0;
            if (0 === arg1) {
              num = callback(arg0);
            }
            if (stageParticipantsCount.STREAM === arg0) {
              let sum = num;
              if (null != rowsBySection[arg0][arg1]) {
                sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
              }
              return sum;
            } else if (stageParticipantsCount.SPEAKER === arg0) {
              if (null == rowsBySection[arg0][arg1]) {
                return num;
              } else {
                if (arg1 > 0) {
                  let sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                } else if (1 === length) {
                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
                } else if (2 === length) {
                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.HALF + 8;
                } else {
                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                }
                let sum2 = num;
                if (!first1) {
                  sum2 = sum1 + num;
                }
                return sum2;
              }
            } else if (stageParticipantsCount.AUDIENCE === arg0) {
              let sum3 = num;
              if (!first) {
                sum3 = 102 + num;
              }
              return sum3;
            } else {
              _modDef38(null != arg0, "Section Not Found");
              return 0;
            }
          }
        }, items2);
        let obj2 = channel(rowsBySection[11]);
        const stageParticipants = channel(rowsBySection[11]).useStageParticipants(
          channel.id,
          channel(rowsBySection[7]).StageChannelParticipantNamedIndex.SPEAKER,
        );
        const found = stageParticipants.filter(
          (type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE,
        );
        const mapped = found.map((user) => user.user);
        const items3 = [tmp[1], collapsed, first1, tmp4[1], actualStageSpeakerCount, stageParticipantsCount, mapped];
        const callback2 = collapsed.useCallback((arg0) => {
          if (stageParticipantsCount.STREAM === arg0) {
            return null;
          } else if (stageParticipantsCount.AUDIENCE === arg0) {
            let tmp13 = null;
            if (0 !== stageParticipantsCount) {
              const obj2 = { label: null, count: null, onToggleCollapse: null, collapsed: null };
              const intl = util.intl;
              obj2.label = intl.string(util.t["3foUu5"]);
              obj2.count = tmp12;
              obj2.onToggleCollapse = function onToggleCollapse() {
                return closure_1_4(!collapsed);
              };
              obj2.collapsed = collapsed;
              tmp13 = closure_2_8(StageSectionHeaderDefault, obj2);
            }
            return tmp13;
          } else if (stageParticipantsCount.SPEAKER === arg0) {
            let tmp21Result2 = null;
            if (0 !== actualStageSpeakerCount) {
              const obj3 = { label: null, count: null, onToggleCollapse: null, collapsed: null, children: null };
              const intl2 = util.intl;
              obj3.label = intl2.string(util.t.CduOkx);
              obj3.count = tmp6;
              obj3.onToggleCollapse = function onToggleCollapse() {
                return closure_1_6(!first1);
              };
              obj3.collapsed = first1;
              let tmp21Result;
              if (first1) {
                const obj = { users: mapped, max: 10, avatarSize: native.AvatarSizes.XSMALL_20, cutout: null };
                obj.cutout = obj;
                tmp21Result = closure_2_8(UserSummaryItemDefault, obj);
                const tmp22Result = UserSummaryItemDefault;
              }
              obj3.children = tmp21Result;
              tmp21Result2 = closure_2_8(StageSectionHeaderDefault, obj3);
            }
            return tmp21Result2;
          } else {
            _modDef38(null != arg0, "Section Not Found");
            return null;
          }
        }, items3);
        const renderSectionFooter = collapsed.useCallback((arg0) => {
          if (stageParticipantsCount.SPEAKER !== arg0) {
            if (stageParticipantsCount.AUDIENCE !== arg0) {
              listSections(rowsBySection[12])(null != arg0, "Section Not Found");
              return null;
            }
          }
          return null;
        }, []);
        const items4 = [channel, callback2, rowsBySection, collapsed, first1];
        const sectionFooterSize = collapsed.useCallback((arg0) => {
          if (stageParticipantsCount.SPEAKER === arg0) {
            return 0;
          } else if (tmp.AUDIENCE === arg0) {
            return 160;
          } else {
            listSections(rowsBySection[12])(null != arg0, "Section Not Found");
            return 0;
          }
        }, []);
        const items5 = [sections, itemSize];
        const renderItem = collapsed.useCallback((arg0, row) => {
          let tmp = null;
          if (0 === row) {
            tmp = callback2(arg0);
          }
          if (null == rowsBySection[arg0][row]) {
            return tmp;
          } else if (stageParticipantsCount.STREAM === arg0) {
            const obj2 = { children: null };
            const obj3 = { channel, participants: rowsBySection[arg0][row], row };
            obj2.children = closure_2_8(StageGridRowDefault, obj3);
            const _HermesInternal3 = HermesInternal;
            return closure_2_8(noop.Fragment, obj2, "stream-" + arg0 + "-" + row);
          } else if (stageParticipantsCount.SPEAKER === arg0) {
            const items = [tmp];
            let tmp19 = !first1;
            if (!first1) {
              const obj4 = { channel, participants: rowsBySection[arg0][row], row };
              tmp19 = closure_2_8(StageGridRowDefault, obj4);
            }
            const obj5 = { children: null };
            items[1] = tmp19;
            obj5.children = items;
            const _HermesInternal2 = HermesInternal;
            return options(noop.Fragment, obj5, "speaker-" + arg0 + "-" + row);
          } else if (stageParticipantsCount.AUDIENCE === arg0) {
            const items1 = [tmp];
            let tmp10 = !first;
            if (!first) {
              const obj = { channel, participants: rowsBySection[arg0][row] };
              tmp10 = closure_2_8(AudienceGridRowDefault, obj);
            }
            const obj6 = { children: null };
            items1[1] = tmp10;
            obj6.children = items1;
            const _HermesInternal = HermesInternal;
            return options(noop.Fragment, obj6, "audience-" + arg0 + "-" + row);
          } else {
            _modDef38(null != arg0, "Section Not Found");
            return null;
          }
        }, items4);
        const memo1 = collapsed.useMemo(() => {
          let num = 0;
          if (sections[stageParticipantsCount.STREAM] > 0) {
            num = itemSize(tmp.STREAM, 0);
          }
          return num;
        }, items5);
        const items6 = [sections, itemSize];
        const memo2 = collapsed.useMemo(() => {
          let tmp4;
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          if (0 < sections[stageParticipantsCount.SPEAKER]) {
            do {
              num2 = num2 + itemSize(stageParticipantsCount.SPEAKER, num);
              num = num + 1;
              num3 = num2;
              tmp4 = sections[stageParticipantsCount.SPEAKER];
            } while (num < tmp4);
          }
          return num3;
        }, items6);
        const items7 = [tmp7[1], first2, memo2, memo1];
        const onScroll = collapsed.useCallback((nativeEvent) => {
          const y = nativeEvent.nativeEvent.contentOffset.y;
          const diff = memo2 + memo1 - 60;
          let tmp2 = first2;
          if (!first2) {
            if (y > diff) {
              closure_8(true);
            }
          }
          if (tmp2) {
            tmp2 = y < diff;
          }
          if (tmp2) {
            closure_8(false);
          }
        }, items7);
        return closure_8(listSections(rowsBySection[18]), {
          ref: collapsed(first1(), 1)[0],
          sections,
          renderItem,
          itemSize,
          renderSectionFooter,
          sectionFooterSize,
          onScroll,
        });
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StageChannelCallList(channel) {
      const cResult = c.c(7);
      channel = channel.channel;
      const throttleDurationForChannel = useStageChannelGridParticipants.useThrottleDurationForChannel(channel.id);
      const width = useWindowDimensionsDefault().width;
      const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
      if (cResult[0] === isScreenLandscape) {
        if (cResult[1] === width) {
          let tmp6 = cResult[2];
        }
        const tmpResult = useStageChannelGridParticipants;
        [tmp13, tmp14] = tmpResult.useStageChannelParticipantsListThrottled(
          channel.id,
          tmp6,
          throttleDurationForChannel,
          true,
        );
        if (cResult[3] === channel) {
          if (cResult[4] === tmp13) {
            if (cResult[5] === tmp14) {
              let tmp15 = cResult[6];
            }
            return tmp15;
          }
        }
        const obj4 = { channel, listSections: tmp13, rowsBySection: tmp14 };
        const tmp18 = closure_1_8(closure_12, obj4);
        cResult[3] = channel;
        cResult[4] = tmp13;
        cResult[5] = tmp14;
        cResult[6] = tmp18;
        tmp15 = tmp18;
        const tmp12 = _slicedToArray(
          tmpResult.useStageChannelParticipantsListThrottled(channel.id, tmp6, throttleDurationForChannel, true),
          2,
        );
      }
      let num = 3;
      if (isScreenLandscape) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.max(3, Math.floor(width / SpeakerTile.LANDSCAPE_MAX_TILE_WIDTH));
      }
      const obj5 = {};
      obj5[StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER] = num;
      obj5[StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE] = MAX_AUDIENCE_ROW_LIMIT;
      cResult[0] = isScreenLandscape;
      cResult[1] = width;
      cResult[2] = obj5;
      tmp6 = obj5;
    }
  : function StageChannelCallList(channel) {
      channel = channel.channel;
      let width;
      let isScreenLandscape;
      const throttleDurationForChannel = width(11144).useThrottleDurationForChannel(channel.id);
      width = isScreenLandscape(1497)().width;
      let obj = width(11144);
      isScreenLandscape = width(8310).useIsScreenLandscape();
      const items = [width, isScreenLandscape];
      const memo = noop.useMemo(() => {
        let num = 3;
        if (isScreenLandscape) {
          const _Math = Math;
          const _Math2 = Math;
          num = Math.max(3, Math.floor(width / SpeakerTile.LANDSCAPE_MAX_TILE_WIDTH));
        }
        const obj = {};
        obj[StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER] = num;
        obj[StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE] = MAX_AUDIENCE_ROW_LIMIT;
        return obj;
      }, items);
      const obj2 = width(8310);
      const tmp4 = _slicedToArray(
        width(11144).useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true),
        2,
      );
      return closure_8(closure_12, { channel, listSections: tmp4[0], rowsBySection: tmp4[1] });
    };
