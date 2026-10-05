// discord_app/modules/channel_sorting/ChannelSortingUtils.tsx
import getFlattedChannelListDefault from "../channel/getFlattedChannelList.tsx";
import DragAndDropUtilsDefault from "../../utils/DragAndDropUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function getFirstChannelOfType(arg0, arg1, arg2, arr) {
  let closure_0 = arg1;
  let c1 = -1;
  const found = arr.find((channel, index) => {
    let flag = channel.channel.id === closure_0;
    if (flag) {
      c1 = index;
      flag = true;
    }
    return flag;
  });
  if (c1 < 0) {
    return null;
  } else {
    let tmp12 = c1;
    if (c1 >= 0) {
      if (tmp12 < arr.length) {
        while (true) {
          let type = arr[tmp12].channel.type;
          let tmp4 = null != type;
          if (tmp4) {
            tmp4 = null != arg2;
          }
          if (tmp4) {
            let tmp6 = type === arg2;
            if (!tmp6) {
              let tmp8 = _false(type) && _false(arg2);
              tmp6 = tmp8;
            }
            if (!tmp6) {
              let tmp10 = React3(type) && React3(arg2);
              tmp6 = tmp10;
            }
            tmp4 = tmp6;
          }
          if (tmp4) {
            break;
          } else {
            let sum = tmp12 + arg0;
            if (sum >= 0) {
              tmp12 = sum;
            }
          }
        }
        return tmp3;
      }
    }
    return null;
  }
}
function getChannelMoveUpdates(localChannel, channel, parentId, channels) {
  let c2;
  let num10;
  let num11;
  let parent_id;
  importDefault = parentId;
  function collectUpdates(substr) {
    if (null != num10) {
      if (null != num11) {
        let moveItemFromToResult;
        const tmp4 =
          null != num10 &&
          null != num11 &&
          null != substr[num10] &&
          substr[num10].channel === localChannel &&
          null != substr[num11];
        if (tmp4) {
          const obj = DragAndDropUtilsDefault;
          moveItemFromToResult = obj.moveItemFromTo(substr, num10, num11);
        }
        concat = concat.concat;
        const obj3 = {
          oldOrdering: substr,
          newOrdering: moveItemFromToResult,
          idGetter(channel) {
            return channel.channel.id;
          },
          existingPositionGetter(channel) {
            return channel.channel.position;
          },
        };
        const obj2 = DragAndDropUtilsDefault;
        concat = concat(obj2.calculatePositionDeltas(obj3));
        return moveItemFromToResult;
      }
    }
    moveItemFromToResult = [...substr];
  }
  let concat = [];
  let items = [];
  let _categories = channels._categories;
  if (localChannel.isCategory()) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, _categories, 0);
    const substr = items1.slice(1);
    let flag = false;
    let c1 = false;
    c2 = undefined;
    let num4 = 0;
    if (null != localChannel) {
      c2 = null;
      const found = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = closure_2_3(type2) && closure_2_3(type);
                closure_2_3(type2) && closure_2_3(type);
              }
              if (!tmp5) {
                tmp5 = closure_2_4(type2) && closure_2_4(type);
                closure_2_4(type2) && closure_2_4(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found1 = found.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num4 = c2;
    }
    num10 = num4;
    localChannel = channel;
    c1 = false;
    c2 = undefined;
    let num5 = 0;
    if (null != channel) {
      c2 = null;
      const found2 = substr.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = closure_2_3(type2) && closure_2_3(type);
                closure_2_3(type2) && closure_2_3(type);
              }
              if (!tmp5) {
                tmp5 = closure_2_4(type2) && closure_2_4(type);
                closure_2_4(type2) && closure_2_4(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found3 = found2.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num5 = c2;
    }
    num11 = num5;
    const collectUpdatesResult = collectUpdates(substr);
    collectUpdatesResult.unshift(_categories[0]);
    items = collectUpdatesResult;
  }
  if (num11(localChannel.type)) {
    let tmp12 = _categories;
    const tmp11 = require("getFlattedChannelList");
    if (items.length > 0) {
      tmp12 = items;
    }
    const tmp11Result = tmp11(tmp12, channels, (channel) => num11(channel.channel.type));
    c1 = false;
    c2 = undefined;
    let num7 = 0;
    if (null != localChannel) {
      c2 = null;
      const found4 = tmp11Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = closure_2_3(type2) && closure_2_3(type);
                closure_2_3(type2) && closure_2_3(type);
              }
              if (!tmp5) {
                tmp5 = closure_2_4(type2) && closure_2_4(type);
                closure_2_4(type2) && closure_2_4(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found5 = found4.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num7 = c2;
    }
    num10 = num7;
    localChannel = channel;
    c1 = false;
    c2 = undefined;
    let num8 = 0;
    if (null != channel) {
      c2 = null;
      const found6 = tmp11Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = closure_2_3(type2) && closure_2_3(type);
                closure_2_3(type2) && closure_2_3(type);
              }
              if (!tmp5) {
                tmp5 = closure_2_4(type2) && closure_2_4(type);
                closure_2_4(type2) && closure_2_4(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found7 = found6.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num8 = c2;
    }
    num11 = num8;
    collectUpdates(tmp11Result);
  }
  if (localChannel.isGuildVocal()) {
    const tmp19 = require("getFlattedChannelList");
    if (items.length > 0) {
      _categories = items;
    }
    const tmp19Result = tmp19(_categories, channels, (channel) => {
      channel = channel.channel;
      return channel.isGuildVocal();
    });
    c1 = false;
    c2 = undefined;
    num10 = 0;
    if (null != localChannel) {
      c2 = null;
      const found8 = tmp19Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = closure_2_3(type2) && closure_2_3(type);
                closure_2_3(type2) && closure_2_3(type);
              }
              if (!tmp5) {
                tmp5 = closure_2_4(type2) && closure_2_4(type);
                closure_2_4(type2) && closure_2_4(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found9 = found8.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num10 = c2;
    }
    localChannel = channel;
    c1 = false;
    c2 = undefined;
    num11 = 0;
    if (null != channel) {
      c2 = null;
      const found10 = tmp19Result.filter((channel) => {
        const type = channel.channel.type;
        let tmp2 = null != id;
        if (tmp2) {
          let tmp3 = c1;
          if (!tmp3) {
            const type2 = tmp.type;
            let tmp4 = null != type2 && null != type;
            if (tmp4) {
              let tmp5 = type2 === type;
              if (!tmp5) {
                tmp5 = closure_2_3(type2) && closure_2_3(type);
                closure_2_3(type2) && closure_2_3(type);
              }
              if (!tmp5) {
                tmp5 = closure_2_4(type2) && closure_2_4(type);
                closure_2_4(type2) && closure_2_4(type);
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      const found11 = found10.find((item, index) => {
        let flag = null != id && tmp === id.id;
        if (flag) {
          c2 = index;
          flag = true;
        }
        return flag;
      });
      num11 = c2;
    }
    collectUpdates(tmp19Result);
  }
  if (localChannel.parent_id !== parentId) {
    if (
      null ==
      concat.find((id) => {
        let flag = id.id === localChannel.id;
        if (flag) {
          id.parent_id = parent_id;
          flag = true;
        }
        return flag;
      })
    ) {
      let obj = { id: localChannel.id, parent_id: parentId };
      concat.push(obj);
    }
  }
  return concat;
}
function getCategoryKey(parent_id, categories) {
  let tmp = parent_id;
  if (null == parent_id) {
    tmp = metroRequire;
  }
  return tmp;
}
({ isGuildSelectableChannelType: c3, isGuildVocalChannelType: closure_4 } = ChannelRecord);
({ ChannelTypes: hasOwnProperty, NULL_STRING_CHANNEL_ID: metroRequire } = Constants);
let result = size.fileFinishedImporting("modules/channel_sorting/ChannelSortingUtils.tsx");

export const areTypesInSameSection = function areTypesInSameSection(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    let tmp2 = arg0 === arg1;
    if (!tmp2) {
      tmp2 = _false(arg0) && _false(arg1);
      _false(arg0) && _false(arg1);
    }
    if (!tmp2) {
      tmp2 = React3(arg0) && React3(arg1);
      React3(arg0) && React3(arg1);
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getDropData = function getDropData(localChannel, arg1, localChannel2, to, channelList) {
  let tmp48;
  if (null != localChannel) {
    if (null != localChannel2) {
      let tmp12;
      let c2;
      const GUILD_CATEGORY2 = constants.GUILD_CATEGORY;
      if (localChannel.type === GUILD_CATEGORY2) {
        if (to !== arg1) {
          if (to < arg1) {
            tmp12 = tmp48;
          }
          tmp48 = null;
          if (to > arg1) {
            let closure_0 = localChannel2;
            let c1 = true;
            c2 = undefined;
            let num17 = 0;
            const GUILD_CATEGORY = tmp60.GUILD_CATEGORY;
            if (null != localChannel2) {
              c2 = null;
              const found = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != id;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!tmp3) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = closure_2_3(type2) && closure_2_3(type);
                        closure_2_3(type2) && closure_2_3(type);
                      }
                      if (!tmp5) {
                        tmp5 = closure_2_4(type2) && closure_2_4(type);
                        closure_2_4(type2) && closure_2_4(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found1 = found.find((item, index) => {
                let flag = null != id && tmp === id.id;
                if (flag) {
                  c2 = index;
                  flag = true;
                }
                return flag;
              });
              num17 = c2;
            }
            if (num17 == null) {
              num17 = 0;
            }
            const tmp50 = channelList[num17 + 1];
            const tmp53 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
            let tmp54 = null;
            if (null != tmp53) {
              tmp54 = null;
              if (tmp53.channel.id !== localChannel.id) {
                let tmp55;
                if (null == tmp50) {
                  tmp55 = { referenceId: tmp53.channel.id, parentId: null };
                  const obj2 = { referenceId: tmp53.channel.id, parentId: null };
                } else {
                  tmp55 = null;
                }
                tmp54 = tmp55;
              }
            }
            tmp48 = tmp54;
          }
        }
        const obj3 = { referenceId: null, parentId: null };
        ({ id: obj13.referenceId, parent_id: obj13.parentId } = localChannel2);
        tmp48 = obj3;
      } else {
        const type3 = localChannel.type;
        const type4 = localChannel2.type;
        let tmp = null != type3 && null != type4;
        if (tmp) {
          let tmp2 = type3 === type4;
          if (!tmp2) {
            let tmp4 = closure_3(type3) && closure_3(type4);
            tmp2 = tmp4;
          }
          if (!tmp2) {
            tmp2 = closure_4(type3) && closure_4(type4);
            closure_4(type3) && closure_4(type4);
          }
          tmp = tmp2;
        }
        if (tmp) {
          const obj4 = { referenceId: null, parentId: null };
          ({ id: obj11.referenceId, parent_id: obj11.parentId } = localChannel2);
          tmp12 = obj4;
        } else if (to < arg1) {
          let obj8;
          if (localChannel2.type === GUILD_CATEGORY2) {
            let obj5;
            closure_0 = localChannel2;
            c1 = true;
            let num13 = 0;
            if (null != localChannel2) {
              c2 = null;
              const found2 = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != id;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!tmp3) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = closure_2_3(type2) && closure_2_3(type);
                        closure_2_3(type2) && closure_2_3(type);
                      }
                      if (!tmp5) {
                        tmp5 = closure_2_4(type2) && closure_2_4(type);
                        closure_2_4(type2) && closure_2_4(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found3 = found2.find((item, index) => {
                let flag = null != id && tmp === id.id;
                if (flag) {
                  c2 = index;
                  flag = true;
                }
                return flag;
              });
              num13 = c2;
            }
            if (num13 == null) {
              num13 = 0;
            }
            const tmp39 = getFirstChannelOfType(1, localChannel2.id, localChannel.type, channelList);
            if (null == channelList[num13 - 1]) {
              obj5 = { referenceId: null, parentId: null };
            } else {
              obj5 = null;
              if (null != tmp39) {
                let type = tmp36.channel.type;
                let type2 = localChannel.type;
                let tmp40 = null != type && null != type2;
                if (tmp40) {
                  let tmp41 = type === type2;
                  if (!tmp41) {
                    tmp41 = closure_3(type) && closure_3(type2);
                    closure_3(type) && closure_3(type2);
                  }
                  if (!tmp41) {
                    tmp41 = closure_4(type) && closure_4(type2);
                    closure_4(type) && closure_4(type2);
                  }
                  tmp40 = tmp41;
                }
                if (tmp40) {
                  obj5 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.parent_id };
                  const obj6 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.parent_id };
                } else {
                  const channel6 = tmp36.channel;
                  obj5 = null;
                  if (channel6.isCategory()) {
                    obj5 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.id };
                    const obj7 = { referenceId: tmp39.channel.id, parentId: channelList[num13 - 1].channel.id };
                  }
                }
              }
            }
            obj8 = obj5;
          } else {
            closure_0 = localChannel2;
            c1 = true;
            let num9 = 0;
            if (null != localChannel2) {
              c2 = null;
              const found4 = channelList.filter((channel) => {
                const type = channel.channel.type;
                let tmp2 = null != id;
                if (tmp2) {
                  let tmp3 = c1;
                  if (!tmp3) {
                    const type2 = tmp.type;
                    let tmp4 = null != type2 && null != type;
                    if (tmp4) {
                      let tmp5 = type2 === type;
                      if (!tmp5) {
                        tmp5 = closure_2_3(type2) && closure_2_3(type);
                        closure_2_3(type2) && closure_2_3(type);
                      }
                      if (!tmp5) {
                        tmp5 = closure_2_4(type2) && closure_2_4(type);
                        closure_2_4(type2) && closure_2_4(type);
                      }
                      tmp4 = tmp5;
                    }
                    tmp3 = tmp4;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              });
              const found5 = found4.find((item, index) => {
                let flag = null != id && tmp === id.id;
                if (flag) {
                  c2 = index;
                  flag = true;
                }
                return flag;
              });
              num9 = c2;
            }
            if (num9 == null) {
              num9 = 0;
            }
            const tmp31 = getFirstChannelOfType(1, localChannel2.id, localChannel.type, channelList);
            if (null == channelList[num9 - 1]) {
              if (!localChannel.isGuildVocal()) {
                let id = null;
                if (null != tmp31) {
                  id = tmp31.channel.id;
                }
                obj8 = { referenceId: id, parentId: null };
              }
            }
            let tmp34 = null;
            if (closure_3(localChannel.type)) {
              tmp34 = null;
              if (null != tmp31) {
                if (closure_3(channelList[num9 - 1].channel.type)) {
                  tmp34 = { referenceId: tmp31.channel.id, parentId: localChannel2.parent_id };
                  const obj9 = { referenceId: tmp31.channel.id, parentId: localChannel2.parent_id };
                } else {
                  const channel5 = tmp28.channel;
                  tmp34 = null;
                }
              }
            }
            obj8 = tmp34;
          }
          tmp12 = obj8;
        } else if (localChannel2.type === GUILD_CATEGORY2) {
          closure_0 = localChannel2;
          let flag = true;
          c1 = true;
          let num5 = 0;
          if (null != localChannel2) {
            c2 = null;
            const found6 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != id;
              if (tmp2) {
                let tmp3 = c1;
                if (!tmp3) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = closure_2_3(type2) && closure_2_3(type);
                      closure_2_3(type2) && closure_2_3(type);
                    }
                    if (!tmp5) {
                      tmp5 = closure_2_4(type2) && closure_2_4(type);
                      closure_2_4(type2) && closure_2_4(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found7 = found6.find((item, index) => {
              let flag = null != id && tmp === id.id;
              if (flag) {
                c2 = index;
                flag = true;
              }
              return flag;
            });
            num5 = c2;
          }
          if (num5 == null) {
            num5 = 0;
          }
          const tmp18 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
          let tmp19 = null;
          if (null != tmp18) {
            if (null == channelList[num5 + 1]) {
              tmp19 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
              const obj10 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
            } else {
              const type5 = tmp15.channel.type;
              const type6 = localChannel.type;
              let tmp20 = null != type5 && null != type6;
              if (tmp20) {
                let tmp21 = type5 === type6;
                if (!tmp21) {
                  tmp21 = closure_3(type5) && closure_3(type6);
                  closure_3(type5) && closure_3(type6);
                }
                if (!tmp21) {
                  tmp21 = closure_4(type5) && closure_4(type6);
                  closure_4(type5) && closure_4(type6);
                }
                tmp20 = tmp21;
              }
              if (tmp20) {
                tmp19 = { referenceId: tmp18.channel.id, parentId: channelList[num5 + 1].channel.parent_id };
                const obj12 = { referenceId: tmp18.channel.id, parentId: channelList[num5 + 1].channel.parent_id };
              } else {
                if (closure_3(localChannel.type)) {
                  const channel3 = tmp15.channel;
                }
                const channel4 = tmp15.channel;
                tmp19 = null;
                if (channel4.isCategory()) {
                  tmp19 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
                  const obj26 = { referenceId: tmp18.channel.id, parentId: localChannel2.id };
                }
              }
            }
          }
          tmp12 = tmp19;
        } else {
          closure_0 = localChannel2;
          c1 = true;
          let num = 0;
          if (null != localChannel2) {
            c2 = null;
            const found8 = channelList.filter((channel) => {
              const type = channel.channel.type;
              let tmp2 = null != id;
              if (tmp2) {
                let tmp3 = c1;
                if (!tmp3) {
                  const type2 = tmp.type;
                  let tmp4 = null != type2 && null != type;
                  if (tmp4) {
                    let tmp5 = type2 === type;
                    if (!tmp5) {
                      tmp5 = closure_2_3(type2) && closure_2_3(type);
                      closure_2_3(type2) && closure_2_3(type);
                    }
                    if (!tmp5) {
                      tmp5 = closure_2_4(type2) && closure_2_4(type);
                      closure_2_4(type2) && closure_2_4(type);
                    }
                    tmp4 = tmp5;
                  }
                  tmp3 = tmp4;
                }
                tmp2 = tmp3;
              }
              return tmp2;
            });
            const found9 = found8.find((item, index) => {
              let flag = null != id && tmp === id.id;
              if (flag) {
                c2 = index;
                flag = true;
              }
              return flag;
            });
            num = c2;
          }
          if (num == null) {
            num = 0;
          }
          const tmp11 = getFirstChannelOfType(-1, localChannel2.id, localChannel.type, channelList);
          tmp12 = null;
          if (null != tmp11) {
            if (!localChannel.isGuildVocal()) {
              let tmp13 = null;
              if (localChannel.isCategory()) {
                if (null == channelList[num + 1]) {
                  tmp13 = { referenceId: tmp11.channel.id, parentId: null };
                  const obj = { referenceId: tmp11.channel.id, parentId: null };
                } else {
                  const channel2 = tmp8.channel;
                  tmp13 = null;
                }
              }
              tmp12 = tmp13;
            } else {
              if (null != channelList[num + 1]) {
                const channel7 = tmp8.channel;
                if (!channel7.isCategory()) {
                  const channel = tmp8.channel;
                  if (channel.isGuildVocal()) {
                    tmp12 = { referenceId: tmp11.channel.id, parentId: channelList[num + 1].channel.parent_id };
                    const obj27 = { referenceId: tmp11.channel.id, parentId: channelList[num + 1].channel.parent_id };
                  }
                }
              }
              tmp12 = { referenceId: tmp11.channel.id, parentId: localChannel2.parent_id };
              const obj28 = { referenceId: tmp11.channel.id, parentId: localChannel2.parent_id };
            }
          }
        }
      }
      return tmp12;
    }
  }
  return null;
};
export { getChannelMoveUpdates };
export { getCategoryKey };
export const getSectionSiblings = function getSectionSiblings(listChannel, categories) {
  let parent_id = listChannel.parent_id;
  if (null == parent_id) {
    parent_id = closure_6;
  }
  let items = categories[parent_id];
  if (items == null) {
    items = [];
  }
  return items.filter((channel) => {
    const type = channel.channel.type;
    const type2 = listChannel.type;
    let tmp = null != type && null != type2;
    if (tmp) {
      let tmp2 = type === type2;
      if (!tmp2) {
        tmp2 = _false(type) && _false(type2);
        _false(type) && _false(type2);
      }
      if (!tmp2) {
        tmp2 = React3(type) && React3(type2);
        React3(type) && React3(type2);
      }
      tmp = tmp2;
    }
    return tmp;
  });
};
export const getChannelPlacementUpdates = function getChannelPlacementUpdates(
  listChannel,
  categories,
  categoryKey,
  arg3,
) {
  _require = listChannel;
  if (listChannel.isCategory()) {
    let first;
    let items;
    const _categories1 = categories._categories;
    const found = _categories1.filter((channel) => channel.channel.id !== closure_1_6);
    if ("first" === arg3) {
      first = found[0];
    } else {
      first = found[found.length - 1];
    }
    if (null != first) {
      items = getChannelMoveUpdates(listChannel, first.channel, null, categories);
    } else {
      items = [];
    }
    return items;
  } else {
    function isSameSection(channel) {
      const type = channel.channel.type;
      const type2 = listChannel.type;
      let tmp = null != type && null != type2;
      if (tmp) {
        let tmp2 = type === type2;
        if (!tmp2) {
          tmp2 = _false(type) && _false(type2);
          _false(type) && _false(type2);
        }
        if (!tmp2) {
          tmp2 = React3(type) && React3(type2);
          React3(type) && React3(type2);
        }
        tmp = tmp2;
      }
      return tmp;
    }
    const arr = getFlattedChannelListDefault(categories._categories, categories, isSameSection);
    const found1 = arr.find((channel) => channel.channel.id === listChannel.id);
    if (null == found1) {
      return [];
    } else {
      const obj2 = {};
      const _categories = categories._categories;
      for (const item10019 of _categories) {
        obj2[item10019.channel.id] = [];
        continue;
      }
      for (const item10028 of arr) {
        if (item10028.channel.id !== listChannel.id) {
          let arr2 = obj2[getCategoryKey(undefined, item10028.channel.parent_id, categories)];
          if (arr2 != null) {
            let arr4 = arr2.push(item10028);
          }
        }
        continue;
      }
      if (null == obj2[categoryKey]) {
        return [];
      } else {
        if ("first" === arg3) {
          obj2[categoryKey].unshift(found1);
        } else {
          obj2[categoryKey].push(found1);
        }
        const obj = {
          oldOrdering: arr,
          newOrdering: getFlattedChannelListDefault(categories._categories, obj2, isSameSection),
          idGetter(channel) {
            return channel.channel.id;
          },
          existingPositionGetter(channel) {
            return channel.channel.position;
          },
        };
        const calculatePositionDeltas = require("DragAndDropUtils").calculatePositionDeltas;
        require("DragAndDropUtils");
        const result = calculatePositionDeltas(obj);
        let tmp21 = null;
        if (categoryKey !== closure_6) {
          tmp21 = categoryKey;
        }
        if (listChannel.parent_id !== tmp21) {
          const found2 = result.find((id) => id.id === listChannel.id);
          if (null != found2) {
            found2.parent_id = tmp21;
          } else {
            const obj3 = { id: listChannel.id, parent_id: tmp21 };
            result.push(obj3);
          }
        }
        return result;
      }
    }
  }
};
