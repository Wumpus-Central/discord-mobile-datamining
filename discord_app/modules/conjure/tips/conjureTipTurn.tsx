// === Module 12612: conjureTipTurn ===

// Module 12612 (conjureTipTurn)
import conjureChatTurns from "conjureChatTurns" /* 10852 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipTurn.tsx");

export function newestSettledTurn(arr) {
  let diff = arr.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = arr[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("project_event" !== tmp2.kind) {
          if ("context_boundary" !== tmp2.kind) {
            if ("user" === tmp2.role) {
              break;
            } else {
              let obj = conjureChatTurns;
              if (obj.turnSettled(tmp2)) {
                return tmp2;
              } else {
                let tmp4Result = conjureChatTurns;
                if (!tmp4Result.isStrandedSegment(arr, diff)) {
                  return null;
                }
              }
            }
          }
        }
      }
      diff = diff - 1;
    }
    return null;
  }
  return null;
}
export function hasRunningTurn(arr) {
  const findOpenTurnResult = conjureChatTurns.findOpenTurn(arr);
  let tmp4 = null != findOpenTurnResult;
  if (tmp4) {
    tmp4 = !conjureChatTurns.isStrandedSegment(arr, arr.lastIndexOf(findOpenTurnResult));
    const tmpResult = conjureChatTurns;
  }
  return tmp4;
}
export function newestPublish(arr) {
  let tmp2;
  let diff = arr.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = arr[diff];
      if ("publish_notice" === tmp2.kind) {
        let publishNotice = tmp2.publishNotice;
        let commands_failed;
        if (publishNotice != null) {
          commands_failed = publishNotice.commands_failed;
        }
        if (true !== commands_failed) {
          break;
        }
      }
      diff = diff - 1;
    }
    return tmp2;
  }
  return null;
}
export function hasNoTurns(arr) {
  return arr.every((kind) => {
    let tmp = "publish_notice" === kind.kind;
    if (!tmp) {
      tmp = "project_event" === kind.kind;
    }
    if (!tmp) {
      tmp = "context_boundary" === kind.kind;
    }
    return tmp;
  });
}
export function hasOpenAsk(newestSettledTurnResult) {
  let tmp = null != newestSettledTurnResult.awaitingUser || null != newestSettledTurnResult.secretRequest || null != newestSettledTurnResult.settingsRequest;
  if (!tmp) {
    const intake = newestSettledTurnResult.intake;
    let num;
    if (intake != null) {
      num = intake.questions.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp = num > 0;
  }
  if (!tmp) {
    tmp = null != newestSettledTurnResult.clarification;
  }
  if (!tmp) {
    tmp = null != newestSettledTurnResult.appBuildRequest;
  }
  if (!tmp) {
    tmp = null != newestSettledTurnResult.restoreProposal;
  }
  if (!tmp) {
    tmp = null != newestSettledTurnResult.publishScheduleProposal;
  }
  return tmp;
}
export function entryActivityAt(atResult) {
  let num = atResult.finished_at;
  if (num == null) {
    num = 0;
  }
  let num2 = atResult.settled_at;
  if (num2 == null) {
    num2 = 0;
  }
  return Math.max(atResult.created_at, num, num2);
}