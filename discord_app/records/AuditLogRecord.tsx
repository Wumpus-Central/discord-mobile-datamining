// === Module 17537: AuditLogRecord ===

// Module 17537 (AuditLogRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import _modDef4153 from "module_4153" /* 4153 */;
import Record from "Record" /* 1386 */;

function getTargetType(action) {
  if (action === constants2.ALL) {
    let CHANNEL = constants.ALL;
  } else if (action <= tmp.GUILD_UPDATE) {
    CHANNEL = constants.GUILD;
  } else {
    if (action > tmp.CHANNEL_DELETE) {
      if (action !== tmp.MESSAGE_BULK_DELETE) {
        if (action <= tmp.CHANNEL_OVERWRITE_DELETE) {
          CHANNEL = constants.CHANNEL_OVERWRITE;
        } else {
          if (action > tmp.BOT_ADD) {
            if (action !== tmp.MESSAGE_DELETE) {
              if (action !== tmp.MESSAGE_PIN) {
                if (action !== tmp.MESSAGE_UNPIN) {
                  if (action <= tmp.ROLE_DELETE) {
                    CHANNEL = constants.ROLE;
                  } else if (action <= tmp.INVITE_DELETE) {
                    CHANNEL = constants.INVITE;
                  } else if (action <= tmp.WEBHOOK_DELETE) {
                    CHANNEL = constants.WEBHOOK;
                  } else if (action <= tmp.EMOJI_DELETE) {
                    CHANNEL = constants.EMOJI;
                  } else if (action <= tmp.INTEGRATION_DELETE) {
                    CHANNEL = constants.INTEGRATION;
                  } else if (action <= tmp.STAGE_INSTANCE_DELETE) {
                    CHANNEL = constants.STAGE_INSTANCE;
                  } else if (action <= tmp.STICKER_DELETE) {
                    CHANNEL = constants.STICKER;
                  } else if (action <= tmp.GUILD_SCHEDULED_EVENT_DELETE) {
                    CHANNEL = constants.GUILD_SCHEDULED_EVENT;
                  } else if (action <= tmp.THREAD_DELETE) {
                    CHANNEL = constants.THREAD;
                  } else if (action === tmp.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                    CHANNEL = constants.APPLICATION_COMMAND;
                  } else if (action <= tmp.SOUNDBOARD_SOUND_DELETE) {
                    CHANNEL = constants.GUILD_SOUNDBOARD;
                  } else if (action < tmp.AUTO_MODERATION_BLOCK_MESSAGE) {
                    CHANNEL = constants.AUTO_MODERATION_RULE;
                  } else {
                    if (action !== tmp.AUTO_MODERATION_BLOCK_MESSAGE) {
                      if (action !== tmp.AUTO_MODERATION_FLAG_TO_CHANNEL) {
                        if (action !== tmp.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
                          if (action !== tmp.AUTO_MODERATION_QUARANTINE_USER) {
                            if (action <= tmp.CREATOR_MONETIZATION_TERMS_ACCEPTED) {
                              CHANNEL = constants.GUILD;
                            } else if (action <= tmp.ONBOARDING_PROMPT_DELETE) {
                              CHANNEL = constants.ONBOARDING_PROMPT;
                            } else if (action <= tmp.ONBOARDING_UPDATE) {
                              CHANNEL = constants.GUILD_ONBOARDING;
                            } else if (action <= tmp.GUILD_HOME_REMOVE_ITEM) {
                              CHANNEL = constants.GUILD_HOME;
                            } else if (action <= tmp.HARMFUL_LINKS_BLOCKED_MESSAGE) {
                              CHANNEL = constants.GUILD;
                            } else if (action <= tmp.HOME_SETTINGS_UPDATE) {
                              CHANNEL = constants.HOME_SETTINGS;
                            } else if (action <= tmp.VOICE_CHANNEL_STATUS_DELETE) {
                              CHANNEL = constants.VOICE_CHANNEL_STATUS;
                            } else if (action <= tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) {
                              CHANNEL = constants.GUILD_SCHEDULED_EVENT_EXCEPTION;
                            } else if (action <= tmp.GUILD_MEMBER_VERIFICATION_UPDATE) {
                              CHANNEL = constants.GUILD_MEMBER_VERIFICATION;
                            } else if (action <= tmp.GUILD_PROFILE_UPDATE) {
                              CHANNEL = constants.GUILD_PROFILE;
                            } else if (action <= tmp.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION) {
                              CHANNEL = constants.GUILD;
                            } else {
                              const _HermesInternal = HermesInternal;
                              SentryUtilsDefault.captureMessage("Unknown target type for: " + action);
                              CHANNEL = constants.UNKNOWN;
                            }
                          }
                        }
                      }
                    }
                    CHANNEL = constants.USER;
                  }
                }
              }
            }
          }
          CHANNEL = constants.USER;
        }
      }
    }
    CHANNEL = constants.CHANNEL;
  }
  return CHANNEL;
}
function getActionType(action) {
  const tmp = constants2;
  if (constants2.CHANNEL_CREATE !== action) {
    if (tmp.CHANNEL_OVERWRITE_CREATE !== action) {
      if (tmp.MEMBER_BAN_REMOVE !== action) {
        if (tmp.ROLE_CREATE !== action) {
          if (tmp.INVITE_CREATE !== action) {
            if (tmp.WEBHOOK_CREATE !== action) {
              if (tmp.EMOJI_CREATE !== action) {
                if (tmp.STICKER_CREATE !== action) {
                  if (tmp.MESSAGE_PIN !== action) {
                    if (tmp.BOT_ADD !== action) {
                      if (tmp.INTEGRATION_CREATE !== action) {
                        if (tmp.STAGE_INSTANCE_CREATE !== action) {
                          if (tmp.GUILD_SCHEDULED_EVENT_CREATE !== action) {
                            if (tmp.THREAD_CREATE !== action) {
                              if (tmp.AUTO_MODERATION_RULE_CREATE !== action) {
                                if (tmp.CREATOR_MONETIZATION_REQUEST_CREATED !== action) {
                                  if (tmp.ONBOARDING_PROMPT_CREATE !== action) {
                                    if (tmp.ONBOARDING_CREATE !== action) {
                                      if (tmp.GUILD_HOME_FEATURE_ITEM !== action) {
                                        if (tmp.SOUNDBOARD_SOUND_CREATE !== action) {
                                          if (tmp.HOME_SETTINGS_CREATE !== action) {
                                            if (tmp.VOICE_CHANNEL_STATUS_CREATE !== action) {
                                              if (tmp.CHANNEL_DELETE !== action) {
                                                if (tmp.CHANNEL_OVERWRITE_DELETE !== action) {
                                                  if (tmp.MEMBER_KICK !== action) {
                                                    if (tmp.MEMBER_PRUNE !== action) {
                                                      if (tmp.MEMBER_BAN_ADD !== action) {
                                                        if (tmp.ROLE_DELETE !== action) {
                                                          if (tmp.INVITE_DELETE !== action) {
                                                            if (tmp.WEBHOOK_DELETE !== action) {
                                                              if (tmp.EMOJI_DELETE !== action) {
                                                                if (tmp.STICKER_DELETE !== action) {
                                                                  if (tmp.MESSAGE_DELETE !== action) {
                                                                    if (tmp.MESSAGE_BULK_DELETE !== action) {
                                                                      if (tmp.MESSAGE_UNPIN !== action) {
                                                                        if (tmp.INTEGRATION_DELETE !== action) {
                                                                          if (tmp.MEMBER_DISCONNECT !== action) {
                                                                            if (tmp.STAGE_INSTANCE_DELETE !== action) {
                                                                              if (tmp.GUILD_SCHEDULED_EVENT_DELETE !== action) {
                                                                                if (tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE !== action) {
                                                                                  if (tmp.THREAD_DELETE !== action) {
                                                                                    if (tmp.AUTO_MODERATION_BLOCK_MESSAGE !== action) {
                                                                                      if (tmp.AUTO_MODERATION_RULE_DELETE !== action) {
                                                                                        if (tmp.ONBOARDING_PROMPT_DELETE !== action) {
                                                                                          if (tmp.GUILD_HOME_REMOVE_ITEM !== action) {
                                                                                            if (tmp.SOUNDBOARD_SOUND_DELETE !== action) {
                                                                                              if (tmp.VOICE_CHANNEL_STATUS_DELETE !== action) {
                                                                                                if (tmp.GUILD_UPDATE !== action) {
                                                                                                  if (tmp.CHANNEL_UPDATE !== action) {
                                                                                                    if (tmp.CHANNEL_OVERWRITE_UPDATE !== action) {
                                                                                                      if (tmp.MEMBER_UPDATE !== action) {
                                                                                                        if (tmp.MEMBER_ROLE_UPDATE !== action) {
                                                                                                          if (tmp.ROLE_UPDATE !== action) {
                                                                                                            if (tmp.INVITE_UPDATE !== action) {
                                                                                                              if (tmp.WEBHOOK_UPDATE !== action) {
                                                                                                                if (tmp.EMOJI_UPDATE !== action) {
                                                                                                                  if (tmp.STICKER_UPDATE !== action) {
                                                                                                                    if (tmp.INTEGRATION_UPDATE !== action) {
                                                                                                                      if (tmp.MEMBER_MOVE !== action) {
                                                                                                                        if (tmp.STAGE_INSTANCE_UPDATE !== action) {
                                                                                                                          if (tmp.GUILD_SCHEDULED_EVENT_UPDATE !== action) {
                                                                                                                            if (tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
                                                                                                                              if (tmp.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
                                                                                                                                if (tmp.THREAD_UPDATE !== action) {
                                                                                                                                  if (tmp.APPLICATION_COMMAND_PERMISSION_UPDATE !== action) {
                                                                                                                                    if (tmp.CREATOR_MONETIZATION_TERMS_ACCEPTED !== action) {
                                                                                                                                      if (tmp.AUTO_MODERATION_RULE_UPDATE !== action) {
                                                                                                                                        if (tmp.AUTO_MODERATION_FLAG_TO_CHANNEL !== action) {
                                                                                                                                          if (tmp.AUTO_MODERATION_USER_COMMUNICATION_DISABLED !== action) {
                                                                                                                                            if (tmp.AUTO_MODERATION_QUARANTINE_USER !== action) {
                                                                                                                                              if (tmp.ONBOARDING_PROMPT_UPDATE !== action) {
                                                                                                                                                if (tmp.ONBOARDING_UPDATE !== action) {
                                                                                                                                                  if (tmp.SOUNDBOARD_SOUND_UPDATE !== action) {
                                                                                                                                                    if (tmp.HOME_SETTINGS_UPDATE !== action) {
                                                                                                                                                      if (tmp.GUILD_MEMBER_VERIFICATION_UPDATE !== action) {
                                                                                                                                                        if (tmp.GUILD_PROFILE_UPDATE !== action) {
                                                                                                                                                          if (tmp.GUILD_MIGRATE_PIN_PERMISSION !== action) {
                                                                                                                                                            if (tmp.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION !== action) {
                                                                                                                                                              return constants3.ALL;
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                return constants3.UPDATE;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return constants3.DELETE;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return constants3.CREATE;
}
const Constants = fn(1074);
({ AuditLogTargetTypes: c2, AuditLogActions: c3, AuditLogActionTypes: closure_4 } = Constants);
const prototype = function AuditLogRecord(timestampEnd) {
  const tmp5 = new prototype(tmp4, tmp3, tmp2, tmp, new.target);
  ({ id: tmp5.id, action: tmp5.action } = timestampEnd);
  tmp5.actionType = getActionType(tmp5.action);
  ({ targetId: tmp5.targetId, timestampStart } = timestampEnd);
  if (timestampStart == null) {
    const tmp8 = _modDef4153;
    timestampStart = tmp8(SnowflakeUtilsDefault.extractTimestamp(tmp5.id));
  }
  tmp5.timestampStart = timestampStart;
  let timestampStart2 = timestampEnd.timestampEnd;
  if (timestampStart2 == null) {
    timestampStart2 = tmp5.timestampStart;
  }
  tmp5.timestampEnd = timestampStart2;
  ({ userId: tmp5.userId, changes } = timestampEnd);
  if (changes == null) {
    changes = [];
  }
  tmp5.changes = changes;
  tmp5.targetType = getTargetType(tmp5.action);
  let options = timestampEnd.options;
  if (options == null) {
    options = {};
  }
  tmp5.options = options;
  let id = timestampEnd.target;
  if (id == null) {
    id = timestampEnd.id;
  }
  tmp5.target = id;
  let user = timestampEnd.user;
  if (user == null) {
    user = null;
  }
  tmp5.user = user;
  return tmp5;
}.prototype;
class prototype extends tmp2 {
}
const size = fn(2);
const result = size.fileFinishedImporting("records/AuditLogRecord.tsx");

export default prototype;
export { getTargetType };
export { getActionType };
export const AuditLogChange = function AuditLogChange(key, items2, added) {
  const obj = Object.create(new.target.prototype);
  obj.key = key;
  obj.oldValue = items2;
  obj.newValue = added;
  return obj;
}.prototype;