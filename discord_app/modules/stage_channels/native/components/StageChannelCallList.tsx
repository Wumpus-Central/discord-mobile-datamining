// discord_app/modules/stage_channels/native/components/StageChannelCallList.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import StageChannelsConstants from "../../StageChannelsConstants.tsx";
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import SpeakerTile from "SpeakerTile.tsx";
import StageSectionHeaderDefault from "StageSectionHeader.tsx";
import UserSummaryItemDefault from "../../../../components_native/common/UserSummaryItem.tsx";
import StageGridRowDefault from "StageGridRow.tsx";
import AudienceGridRowDefault from "AudienceGridRow.tsx";
import useStageChannelGridParticipants from "../../useStageChannelGridParticipants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import StageChannelListStore from "../StageChannelListStore.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel, collapsed, cutout;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ useActiveSpeakerPillScrollHandler: hasOwnProperty, useActiveSpeakerPillState: metroRequire } =
  StageChannelListStore);
const MAX_AUDIENCE_ROW_LIMIT = StageChannelsConstants.MAX_AUDIENCE_ROW_LIMIT;
let Fragment = Fragment_mod;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { direction: native.CutoutDirection.RIGHT, radius: 13, inset: -6 };
let users = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let closure_10;
        let closure_3;
        let closure_5;
        let first1;
        let listSections;
        let rowsBySection;
        let tmp11;
        let tmp = channel;
        let tmp2 = collapsed;
        let obj = channel(collapsed[9]);
        const cResult = obj.c(43);
        channel = channel.channel;
        ({ listSections, rowsBySection } = channel);
        [collapsed, _slicedToArray] = first1.useState(false);
        [first1, closure_5] = first1.useState(false);
        const tmp8 = _slicedToArray(closure_6(), 2);
        closure_6 = tmp8[0];
        let closure_7 = tmp9;
        const first2 = _slicedToArray(closure_5(), 1)[0];
        if (cResult[0] !== tmp8[1]) {
          const fn = function s() {
            return () => {
              closure_1_7(false);
            };
          };
          let num = 0;
          cResult[0] = tmp8[1];
          cResult[1] = fn;
          tmp11 = fn;
        } else {
          tmp11 = cResult[1];
        }
        const tmp12 = rowsBySection(tmp2[10])(tmp11);
        let tmp13 = users;
        let num2 = listSections[users.STREAM];
        const _Math = Math;
        if (num2 == null) {
          num2 = 1;
        }
        const maxResult = max(num2, 1);
        let num3 = listSections[tmp13.SPEAKER];
        const _Math2 = Math;
        const max2 = Math.max;
        if (num3 == null) {
          num3 = 1;
        }
        const max2Result = max2(num3, 1);
        if (cResult[2] === maxResult) {
          if (cResult[3] === max2Result) {
            if (cResult[4] === listSections[tmp13.AUDIENCE]) {
              let tmp17 = cResult[5];
            }
            const tmpResult = tmp(tmp2[11]);
            const actualStageSpeakerCount = tmpResult.useActualStageSpeakerCount(channel.id);
            const tmpResult3 = tmp(tmp2[11]);
            const stageParticipantsCount = tmpResult3.useStageParticipantsCount(
              channel.id,
              tmp(tmp2[7]).StageChannelParticipantNamedIndex.AUDIENCE,
            );
            if (cResult[6] === stageParticipantsCount) {
              let tmp20;
              if (cResult[7] === actualStageSpeakerCount) {
                tmp20 = cResult[8];
              }
              cutout = tmp20;
              if (cResult[9] === collapsed) {
                if (cResult[10] === tmp20) {
                  if (cResult[11] === rowsBySection) {
                    const useStageParticipants = tmp(tmp2[11]).useStageParticipants;
                    tmp(tmp2[11]);
                    class G {
                      constructor(arg0, arg1) {
                        if (null == arg1) {
                          return 0;
                        } else {
                          let num = 0;
                          if (0 === arg1) {
                            num = closure_10(arg0);
                          }
                          if (users.STREAM === arg0) {
                            let sum = num;
                            if (null != rowsBySection[arg0][arg1]) {
                              sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                            }
                            return sum;
                          } else if (users.SPEAKER === arg0) {
                            if (null == rowsBySection[arg0][arg1]) {
                              return num;
                            } else {
                              let sum1;
                              if (arg1 > 0) {
                                sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                              } else if (1 === tmp8[arg0][arg1].length) {
                                sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
                              } else if (2 === tmp8[arg0][arg1].length) {
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
                          } else if (users.AUDIENCE === arg0) {
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
                      }
                    }
                    const stageParticipants = useStageParticipants(
                      tmp23,
                      tmp(tmp2[7]).StageChannelParticipantNamedIndex.SPEAKER,
                    );
                    if (cResult[14] !== stageParticipants) {
                      const _Symbol = Symbol;
                      class G {
                        constructor(arg0, arg1) {
                          if (null == arg1) {
                            return 0;
                          } else {
                            let num = 0;
                            if (0 === arg1) {
                              num = closure_10(arg0);
                            }
                            if (users.STREAM === arg0) {
                              let sum = num;
                              if (null != rowsBySection[arg0][arg1]) {
                                sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                              }
                              return sum;
                            } else if (users.SPEAKER === arg0) {
                              if (null == rowsBySection[arg0][arg1]) {
                                return num;
                              } else {
                                let sum1;
                                if (arg1 > 0) {
                                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                } else if (1 === tmp8[arg0][arg1].length) {
                                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
                                } else if (2 === tmp8[arg0][arg1].length) {
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
                            } else if (users.AUDIENCE === arg0) {
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
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        class V {
                          constructor(user) {
                            return user.user;
                          }
                        }
                        cResult[17] = V;
                        class G {
                          constructor(arg0, arg1) {
                            if (null == arg1) {
                              return 0;
                            } else {
                              let num = 0;
                              if (0 === arg1) {
                                num = closure_10(arg0);
                              }
                              if (users.STREAM === arg0) {
                                let sum = num;
                                if (null != rowsBySection[arg0][arg1]) {
                                  sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                                }
                                return sum;
                              } else if (users.SPEAKER === arg0) {
                                if (null == rowsBySection[arg0][arg1]) {
                                  return num;
                                } else {
                                  let sum1;
                                  if (arg1 > 0) {
                                    sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                                  } else if (1 === tmp8[arg0][arg1].length) {
                                    sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
                                  } else if (2 === tmp8[arg0][arg1].length) {
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
                              } else if (users.AUDIENCE === arg0) {
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
                          }
                        }
                      } else {
                        class V {
                          constructor(user) {
                            return user.user;
                          }
                        }
                      }
                      const found = stageParticipants.filter(tmp26);
                      class J {
                        constructor(arg0) {
                          let intl;
                          let intl2;
                          let obj;
                          let tmp21Result;
                          if (users.STREAM === arg0) {
                            return null;
                          } else if (users.AUDIENCE === arg0) {
                            let tmp13 = null;
                            if (0 !== stageParticipantsCount) {
                              const obj2 = {
                                label: intl.string(intl3.t["3foUu5"]),
                                count: tmp12,
                                onToggleCollapse() {
                                  return closure_1_3(!collapsed);
                                },
                                collapsed,
                              };
                              const tmp17 = StageSectionHeaderDefault;
                              intl = intl3.intl;
                              tmp13 = metroImportAll(tmp17, obj2);
                            }
                            return tmp13;
                          } else if (users.SPEAKER === arg0) {
                            let tmp21Result2 = null;
                            if (0 !== actualStageSpeakerCount) {
                              const obj3 = {
                                label: intl2.string(intl3.t.CduOkx),
                                count: tmp6,
                                onToggleCollapse() {
                                  return closure_1_5(!first1);
                                },
                                collapsed: first1,
                                children: tmp21Result,
                              };
                              const tmp24 = StageSectionHeaderDefault;
                              intl2 = intl3.intl;
                              tmp21Result = undefined;
                              if (first1) {
                                obj = { users, max: 10, avatarSize: native.AvatarSizes.XSMALL_20, cutout: obj };
                                const tmp22Result = UserSummaryItemDefault;
                                tmp21Result = metroImportAll(tmp22Result, obj);
                              }
                              tmp21Result2 = metroImportAll(tmp24, obj3);
                            }
                            return tmp21Result2;
                          } else {
                            _modDef38(null != arg0, "Section Not Found");
                            return null;
                          }
                        }
                      }
                      cResult[14] = stageParticipants;
                      cResult[15] = tmp28;
                    } else {
                      class V {
                        constructor(user) {
                          return user.user;
                        }
                      }
                    }
                    users = tmp28;
                    if (cResult[18] === collapsed) {
                      class V {
                        constructor(user) {
                          return user.user;
                        }
                      }
                    }
                    class J {
                      constructor(arg0) {
                        let intl;
                        let intl2;
                        let obj;
                        let tmp21Result;
                        if (users.STREAM === arg0) {
                          return null;
                        } else if (users.AUDIENCE === arg0) {
                          let tmp13 = null;
                          if (0 !== stageParticipantsCount) {
                            const obj2 = {
                              label: intl.string(intl3.t["3foUu5"]),
                              count: tmp12,
                              onToggleCollapse() {
                                return closure_1_3(!collapsed);
                              },
                              collapsed,
                            };
                            const tmp17 = StageSectionHeaderDefault;
                            intl = intl3.intl;
                            tmp13 = metroImportAll(tmp17, obj2);
                          }
                          return tmp13;
                        } else if (users.SPEAKER === arg0) {
                          let tmp21Result2 = null;
                          if (0 !== actualStageSpeakerCount) {
                            const obj3 = {
                              label: intl2.string(intl3.t.CduOkx),
                              count: tmp6,
                              onToggleCollapse() {
                                return closure_1_5(!first1);
                              },
                              collapsed: first1,
                              children: tmp21Result,
                            };
                            const tmp24 = StageSectionHeaderDefault;
                            intl2 = intl3.intl;
                            tmp21Result = undefined;
                            if (first1) {
                              obj = { users, max: 10, avatarSize: native.AvatarSizes.XSMALL_20, cutout: obj };
                              const tmp22Result = UserSummaryItemDefault;
                              tmp21Result = metroImportAll(tmp22Result, obj);
                            }
                            tmp21Result2 = metroImportAll(tmp24, obj3);
                          }
                          return tmp21Result2;
                        } else {
                          _modDef38(null != arg0, "Section Not Found");
                          return null;
                        }
                      }
                    }
                    cResult[18] = collapsed;
                    cResult[19] = stageParticipantsCount;
                    cResult[20] = actualStageSpeakerCount;
                    cResult[21] = tmp28;
                    cResult[22] = first1;
                    cResult[23] = J;
                  }
                }
              }
              class G {
                constructor(arg0, arg1) {
                  if (null == arg1) {
                    return 0;
                  } else {
                    let num = 0;
                    if (0 === arg1) {
                      num = closure_10(arg0);
                    }
                    if (users.STREAM === arg0) {
                      let sum = num;
                      if (null != rowsBySection[arg0][arg1]) {
                        sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
                      }
                      return sum;
                    } else if (users.SPEAKER === arg0) {
                      if (null == rowsBySection[arg0][arg1]) {
                        return num;
                      } else {
                        let sum1;
                        if (arg1 > 0) {
                          sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                        } else if (1 === tmp8[arg0][arg1].length) {
                          sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
                        } else if (2 === tmp8[arg0][arg1].length) {
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
                    } else if (users.AUDIENCE === arg0) {
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
            let num4 = 6;
            cResult[6] = stageParticipantsCount;
            cResult[7] = actualStageSpeakerCount;
            cResult[8] = fn2;
            tmp20 = fn2;
          }
        }
        let items = [maxResult, max2Result, listSections[tmp13.AUDIENCE]];
        cResult[2] = maxResult;
        cResult[3] = max2Result;
        cResult[4] = listSections[tmp13.AUDIENCE];
        cResult[5] = items;
      }
    : (channel) => {
        let closure_4;
        channel = channel.channel;
        const listSections = channel.listSections;
        const rowsBySection = channel.rowsBySection;
        collapsed = undefined;
        let tmp = collapsed(collapsed.useState(false), 2);
        collapsed = tmp3;
        let tmp4 = collapsed(collapsed.useState(false), 2);
        const first1 = tmp4[0];
        const tmp6 = tmp4[1];
        let closure_6 = tmp6;
        const tmp7 = collapsed(closure_6(), 2);
        const first2 = tmp7[0];
        let closure_8 = tmp9;
        const ref = collapsed(first1(), 1)[0];
        listSections(rowsBySection[10])(() => () => {
          closure_1_8(false);
        });
        let items = [listSections];
        const sections = collapsed.useMemo(() => {
          let num = listSections[stageParticipantsCount.STREAM];
          const _Math = Math;
          if (num == null) {
            num = 1;
          }
          const items = [max(num, 1), ,];
          let num2 = listSections[stageParticipantsCount.SPEAKER];
          const _Math2 = Math;
          const max2 = Math.max;
          if (num2 == null) {
            num2 = 1;
          }
          items[1] = max2(num2, 1);
          items[2] = listSections[stageParticipantsCount.AUDIENCE];
          return items;
        }, items);
        let obj = channel(rowsBySection[11]);
        const actualStageSpeakerCount = obj.useActualStageSpeakerCount(channel.id);
        let obj2 = channel(rowsBySection[11]);
        const stageParticipantsCount = obj2.useStageParticipantsCount(
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
                let sum1;
                if (arg1 > 0) {
                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
                } else if (1 === tmp8[arg0][arg1].length) {
                  sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
                } else if (2 === tmp8[arg0][arg1].length) {
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
        let obj3 = channel(rowsBySection[11]);
        const stageParticipants = obj3.useStageParticipants(
          channel.id,
          channel(rowsBySection[7]).StageChannelParticipantNamedIndex.SPEAKER,
        );
        const found = stageParticipants.filter(
          (type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE,
        );
        const mapped = found.map((user) => user.user);
        const items3 = [tmp3, collapsed, first1, tmp6, actualStageSpeakerCount, stageParticipantsCount, mapped];
        const callback2 = collapsed.useCallback((arg0) => {
          let intl;
          let intl2;
          let obj;
          let tmp21Result;
          if (stageParticipantsCount.STREAM === arg0) {
            return null;
          } else if (stageParticipantsCount.AUDIENCE === arg0) {
            let tmp13 = null;
            if (0 !== stageParticipantsCount) {
              const obj2 = {
                label: intl.string(intl3.t["3foUu5"]),
                count: tmp12,
                onToggleCollapse() {
                  return closure_1_4(!collapsed);
                },
                collapsed,
              };
              const tmp17 = StageSectionHeaderDefault;
              intl = intl3.intl;
              tmp13 = metroImportAll(tmp17, obj2);
            }
            return tmp13;
          } else if (stageParticipantsCount.SPEAKER === arg0) {
            let tmp21Result2 = null;
            if (0 !== actualStageSpeakerCount) {
              const obj3 = {
                label: intl2.string(intl3.t.CduOkx),
                count: tmp6,
                onToggleCollapse() {
                  return closure_1_6(!first1);
                },
                collapsed: first1,
                children: tmp21Result,
              };
              const tmp24 = StageSectionHeaderDefault;
              intl2 = intl3.intl;
              tmp21Result = undefined;
              if (first1) {
                obj = { users: mapped, max: 10, avatarSize: native.AvatarSizes.XSMALL_20, cutout: obj };
                const tmp22Result = UserSummaryItemDefault;
                tmp21Result = metroImportAll(tmp22Result, obj);
              }
              tmp21Result2 = metroImportAll(tmp24, obj3);
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
          let obj3;
          let tmp = null;
          if (0 === row) {
            tmp = callback2(arg0);
          }
          if (null == rowsBySection[arg0][row]) {
            return tmp;
          } else if (stageParticipantsCount.STREAM === arg0) {
            const Fragment3 = react.Fragment;
            const obj2 = { children: metroImportAll(StageGridRowDefault, obj3) };
            const _HermesInternal3 = HermesInternal;
            obj3 = { channel, participants: rowsBySection[arg0][row], row };
            return metroImportAll(Fragment3, obj2, "stream-" + arg0 + "-" + row);
          } else if (stageParticipantsCount.SPEAKER === arg0) {
            const items = [tmp];
            let tmp19 = !first1;
            const Fragment2 = react.Fragment;
            if (!first1) {
              const obj4 = { channel, participants: rowsBySection[arg0][row], row };
              tmp19 = metroImportAll(StageGridRowDefault, obj4);
            }
            const obj5 = { children: items };
            items[1] = tmp19;
            const _HermesInternal2 = HermesInternal;
            return React4(Fragment2, obj5, "speaker-" + arg0 + "-" + row);
          } else if (stageParticipantsCount.AUDIENCE === arg0) {
            const items1 = [tmp];
            let tmp10 = !first;
            const Fragment = react.Fragment;
            if (!first) {
              const obj = { channel, participants: rowsBySection[arg0][row] };
              tmp10 = metroImportAll(AudienceGridRowDefault, obj);
            }
            const obj6 = { children: items1 };
            items1[1] = tmp10;
            const _HermesInternal = HermesInternal;
            return React4(Fragment, obj6, "audience-" + arg0 + "-" + row);
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
          if (!tmp2) {
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
          ref,
          sections,
          renderItem,
          itemSize,
          renderSectionFooter,
          sectionFooterSize,
          onScroll,
        });
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp13;
      let tmp14;
      const obj = react2;
      const cResult = obj.c(7);
      channel = channel.channel;
      const obj2 = useStageChannelGridParticipants;
      const throttleDurationForChannel = obj2.useThrottleDurationForChannel(channel.id);
      const width = useWindowDimensionsDefault().width;
      const obj3 = useIsScreenLandscape;
      const isScreenLandscape = obj3.useIsScreenLandscape();
      if (cResult[0] === isScreenLandscape) {
        let tmp6;
        if (cResult[1] === width) {
          tmp6 = cResult[2];
        }
        const tmpResult = useStageChannelGridParticipants;
        [tmp13, tmp14] = tmpResult.useStageChannelParticipantsListThrottled(
          channel.id,
          tmp6,
          throttleDurationForChannel,
          true,
        );
        _slicedToArray(
          tmpResult.useStageChannelParticipantsListThrottled(channel.id, tmp6, throttleDurationForChannel, true),
          2,
        );
        if (cResult[3] === channel) {
          if (cResult[4] === tmp13) {
            let tmp15;
            if (cResult[5] === tmp14) {
              tmp15 = cResult[6];
            }
            return tmp15;
          }
        }
        const obj4 = { channel, listSections: tmp13, rowsBySection: tmp14 };
        const tmp18 = metroImportAll(closure_12, obj4);
        cResult[3] = channel;
        cResult[4] = tmp13;
        cResult[5] = tmp14;
        cResult[6] = tmp18;
        tmp15 = tmp18;
      }
      let num = 3;
      const SPEAKER = StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER;
      if (isScreenLandscape) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.max(3, Math.floor(width / SpeakerTile.LANDSCAPE_MAX_TILE_WIDTH));
      }
      const obj5 = {};
      obj5[SPEAKER] = num;
      obj5[StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE] = MAX_AUDIENCE_ROW_LIMIT;
      cResult[0] = isScreenLandscape;
      cResult[1] = width;
      cResult[2] = obj5;
      tmp6 = obj5;
    }
  : (channel) => {
      channel = channel.channel;
      let width;
      let isScreenLandscape;
      let obj = width(9767);
      const throttleDurationForChannel = obj.useThrottleDurationForChannel(channel.id);
      width = isScreenLandscape(1484)().width;
      const obj2 = width(5919);
      isScreenLandscape = obj2.useIsScreenLandscape();
      const items = [width, isScreenLandscape];
      const memo = react.useMemo(() => {
        let num = 3;
        const SPEAKER = StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER;
        if (isScreenLandscape) {
          const _Math = Math;
          const _Math2 = Math;
          num = Math.max(3, Math.floor(width / SpeakerTile.LANDSCAPE_MAX_TILE_WIDTH));
        }
        const obj = {};
        obj[SPEAKER] = num;
        obj[StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE] = MAX_AUDIENCE_ROW_LIMIT;
        return obj;
      }, items);
      const obj3 = width(9767);
      const tmp4 = _slicedToArray(
        obj3.useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true),
        2,
      );
      const obj4 = { channel, listSections: tmp4[0], rowsBySection: tmp4[1] };
      return closure_8(closure_12, obj4);
    };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default tmp5;
