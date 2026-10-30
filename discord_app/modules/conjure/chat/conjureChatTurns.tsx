// === Module 10832: conjureChatTurns ===

// Module 10832 (conjureChatTurns)
import conjureStepTimeline from "conjureStepTimeline" /* 10833 */;
import conjureChatHistory from "conjureChatHistory" /* 10834 */;
import size from "module_2" /* 2 */;

function findOpenTurn(messages) {
  let tmp;
  if (null == messages) {
    return null;
  } else {
    let diff = messages.length - 1;
    let flag2 = false;
    if (0 <= diff) {
      while (true) {
        tmp = messages[diff];
        let tmp4 = flag2;
        if ("assistant" === tmp.role) {
          let tmp5 = "side_reply" === tmp.kind || "publish_notice" === tmp.kind || "project_event" === tmp.kind || "context_boundary" === tmp.kind;
          tmp4 = flag2;
          if (!tmp5) {
            let flag = flag2;
            if (!flag2) {
              let hasTerminalStepResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!hasTerminalStepResult) {
                let obj = conjureStepTimeline;
                hasTerminalStepResult = obj.hasTerminalStep(tmp.steps);
              }
              flag = true;
              if (!hasTerminalStepResult) {
                break;
              }
            }
            tmp4 = flag;
            if (null != tmp.turn_id) {
              let hasTerminalStepResult1 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!hasTerminalStepResult1) {
                let obj2 = conjureStepTimeline;
                hasTerminalStepResult1 = obj2.hasTerminalStep(tmp.steps);
              }
              tmp4 = flag;
              if (!hasTerminalStepResult1) {
                return tmp;
              }
            }
          }
        }
        diff = diff - 1;
        flag2 = tmp4;
      }
      return tmp;
    }
    return null;
  }
}
const result = size.fileFinishedImporting("modules/conjure/chat/conjureChatTurns.tsx");

export function turnSettled(message) {
  let hasTerminalStepResult = true === message.finished || true === message.continued;
  if (!hasTerminalStepResult) {
    hasTerminalStepResult = "" !== message.content;
  }
  if (!hasTerminalStepResult) {
    hasTerminalStepResult = null != message.proposal;
  }
  if (!hasTerminalStepResult) {
    hasTerminalStepResult = null != message.clarification;
  }
  if (!hasTerminalStepResult) {
    hasTerminalStepResult = null != message.intake;
  }
  if (!hasTerminalStepResult) {
    hasTerminalStepResult = conjureStepTimeline.hasTerminalStep(message.steps);
  }
  return hasTerminalStepResult;
}
export { findOpenTurn };
export function hasOpenTurn(map) {
  return null != findOpenTurn(map);
}
export function isStrandedSegment(arr, diff) {
  if (arr[diff] != null) {
    const turn_id = tmp.turn_id;
  }
  if (null != arr[diff]) {
    if ("assistant" === tmp.role) {
      if (null != turn_id) {
        if ("" === tmp.content) {
          let hasTerminalStepResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
          if (!hasTerminalStepResult) {
            hasTerminalStepResult = conjureStepTimeline.hasTerminalStep(tmp.steps);
          }
          if (!hasTerminalStepResult) {
            diff = diff - 1;
            if (0 <= diff) {
              while ("user" !== arr[diff].role) {
                let tmp11 = tmp7.turn_id === turn_id;
                if (!tmp11) {
                  let _HermesInternal = HermesInternal;
                  tmp11 = tmp7.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + turn_id;
                }
                if (tmp11) {
                  let hasTerminalStepResult1 = true === tmp7.finished || true === tmp7.continued || "" !== tmp7.content || null != tmp7.proposal || null != tmp7.clarification || null != tmp7.intake;
                  if (!hasTerminalStepResult1) {
                    let obj2 = conjureStepTimeline;
                    hasTerminalStepResult1 = obj2.hasTerminalStep(tmp7.steps);
                  }
                  if (hasTerminalStepResult1) {
                    hasTerminalStepResult1 = true !== tmp7.continued;
                  }
                  return hasTerminalStepResult1;
                } else {
                  diff = diff - 1;
                }
              }
              return false;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
}
export function isSegmentOfTurn(value, turnId) {
  let tmp = value.turn_id === turnId;
  if (!tmp) {
    const _HermesInternal = HermesInternal;
    tmp = value.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + turnId;
  }
  return tmp;
}
export function turnIdOfSegment(message) {
  if (null != message.turn_id) {
    let turn_id = message.turn_id;
  } else {
    const id = message.id;
    turn_id = null;
    if (id.startsWith(conjureChatHistory.TURN_ENTRY_PREFIX)) {
      const id1 = message.id;
      turn_id = id1.slice(conjureChatHistory.TURN_ENTRY_PREFIX.length);
    }
  }
  return turn_id;
}
export function findTurnSegment(arr3, activeTurnId) {
  if (null == activeTurnId) {
    return -1;
  } else {
    let diff = arr3.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp4 = arr3[diff];
        let tmp5 = tmp4.turn_id === activeTurnId;
        if (!tmp5) {
          let _HermesInternal = HermesInternal;
          tmp5 = tmp4.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + activeTurnId;
        }
        if (tmp5) {
          break;
        } else {
          diff = diff - 1;
        }
      }
      return diff;
    }
    return -1;
  }
}
export function resolveTurnIndex(value, activeTurnId) {
  let num = -1;
  if (null != activeTurnId) {
    let diff = value.length - 1;
    num = -1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = value[diff];
        let tmp4 = tmp3.turn_id === activeTurnId;
        if (!tmp4) {
          let _HermesInternal = HermesInternal;
          tmp4 = tmp3.id === "" + conjureChatHistory.TURN_ENTRY_PREFIX + activeTurnId;
        }
        num = diff;
        if (tmp4) {
          break;
        } else {
          diff = diff - 1;
          num = -1;
          if (0 > diff) {
            break;
          }
        }
      }
    }
  }
  if (-1 !== num) {
    return num;
  } else {
    let diff1 = value.length - 1;
    if (0 <= diff1) {
      while (true) {
        let tmp8 = value[diff1];
        if ("assistant" === tmp8.role) {
          let hasTerminalStepResult = true === tmp8.finished || true === tmp8.continued || "" !== tmp8.content || null != tmp8.proposal || null != tmp8.clarification || null != tmp8.intake;
          if (!hasTerminalStepResult) {
            let obj = conjureStepTimeline;
            hasTerminalStepResult = obj.hasTerminalStep(tmp8.steps);
          }
          if (!hasTerminalStepResult) {
            if (null == tmp8.turn_id) {
              break;
            }
          }
        }
        diff1 = diff1 - 1;
      }
      return diff1;
    }
    return -1;
  }
}
export function replaceAt(value, findIndexResult, arg2) {
  const substr = value.slice();
  substr[findIndexResult] = arg2;
  return substr;
}
export function isOutsideTurn(value) {
  let tmp = "side_reply" === value.kind;
  if (!tmp) {
    tmp = "publish_notice" === value.kind;
  }
  if (!tmp) {
    tmp = "project_event" === value.kind;
  }
  if (!tmp) {
    tmp = "context_boundary" === value.kind;
  }
  return tmp;
}
export function stoppable(role) {
  let tmp = "assistant" === role.role;
  if (tmp) {
    let tmp2 = "side_reply" === role.kind;
    if (!tmp2) {
      tmp2 = "publish_notice" === role.kind;
    }
    if (!tmp2) {
      tmp2 = "project_event" === role.kind;
    }
    if (!tmp2) {
      tmp2 = "context_boundary" === role.kind;
    }
    tmp = !tmp2;
  }
  if (tmp) {
    let hasTerminalStepResult = true === role.finished || true === role.continued;
    if (!hasTerminalStepResult) {
      hasTerminalStepResult = "" !== role.content;
    }
    if (!hasTerminalStepResult) {
      hasTerminalStepResult = null != role.proposal;
    }
    if (!hasTerminalStepResult) {
      hasTerminalStepResult = null != role.clarification;
    }
    if (!hasTerminalStepResult) {
      hasTerminalStepResult = null != role.intake;
    }
    if (!hasTerminalStepResult) {
      hasTerminalStepResult = conjureStepTimeline.hasTerminalStep(role.steps);
    }
    tmp = !hasTerminalStepResult;
  }
  if (tmp) {
    tmp = true !== role.stopRequested;
  }
  return tmp;
}