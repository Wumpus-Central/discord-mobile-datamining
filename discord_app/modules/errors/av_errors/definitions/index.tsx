// === Module 17347: ErrorDefinitions ===

// Module 17347 (ErrorDefinitions)
import set from "set" /* 2 */;
import mapped from "mapped" /* 9504 */;
import AVErrorNoAudioInputDetectedDefinition from "AVErrorNoAudioInputDetectedDefinition" /* 17348 */;
import AVErrorNoInputDevicesDefinition from "AVErrorNoInputDevicesDefinition" /* 17350 */;
import AVErrorStreamViewLowFPSDefinition from "AVErrorStreamViewLowFPSDefinition" /* 17351 */;
import AVErrorStreamViewHighPacketLossDefinition from "AVErrorStreamViewHighPacketLossDefinition" /* 17353 */;
import AVErrorStreamSendHighPacketLossDefinition from "AVErrorStreamSendHighPacketLossDefinition" /* 17354 */;
import AVErrorStreamSendLowFPSDefinition from "AVErrorStreamSendLowFPSDefinition" /* 17355 */;
import AVErrorStreamBadNetworkQualityDefinition from "AVErrorStreamBadNetworkQualityDefinition" /* 17356 */;
import AVErrorStreamSoundshareFailedDefinition from "AVErrorStreamSoundshareFailedDefinition" /* 17357 */;
import AVErrorStreamFailedToStartDefinition from "AVErrorStreamFailedToStartDefinition" /* 17358 */;
import AVErrorStreamReconnectingDefinition from "AVErrorStreamReconnectingDefinition" /* 17359 */;
import AVErrorScreenshareOSErrorDefinition from "AVErrorScreenshareOSErrorDefinition" /* 17360 */;
import AVErrorAudioCaptureSampleRateMismatchDefinition from "AVErrorAudioCaptureSampleRateMismatchDefinition" /* 17361 */;
import AVErrorVideoStreamSenderReadyTimeoutDefinition from "AVErrorVideoStreamSenderReadyTimeoutDefinition" /* 17362 */;
import AVErrorVideoStreamReceiverReadyTimeoutDefinition from "AVErrorVideoStreamReceiverReadyTimeoutDefinition" /* 17363 */;
import AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition from "AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition" /* 17364 */;
import AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition from "AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition" /* 17365 */;
import AVErrorCameraSendLowFPSDefinition from "AVErrorCameraSendLowFPSDefinition" /* 17366 */;

const obj = {};
obj[mapped.AVError.NO_AUDIO_INPUT_DETECTED] = AVErrorNoAudioInputDetectedDefinition.AVErrorNoAudioInputDetectedDefinition;
obj[mapped.AVError.NO_INPUT_DEVICES] = AVErrorNoInputDevicesDefinition.AVErrorNoInputDevicesDefinition;
obj[mapped.AVError.STREAM_VIEW_LOW_FPS] = AVErrorStreamViewLowFPSDefinition.AVErrorStreamViewLowFPSDefinition;
obj[mapped.AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = AVErrorStreamViewHighPacketLossDefinition.AVErrorStreamViewHighPacketLossDefinition;
obj[mapped.AVError.STREAM_SEND_HIGH_PACKET_LOSS] = AVErrorStreamSendHighPacketLossDefinition.AVErrorStreamSendHighPacketLossDefinition;
obj[mapped.AVError.STREAM_SEND_LOW_FPS] = AVErrorStreamSendLowFPSDefinition.AVErrorStreamSendLowFPSDefinition;
obj[mapped.AVError.STREAM_BAD_NETWORK_QUALITY] = AVErrorStreamBadNetworkQualityDefinition.AVErrorStreamBadNetworkQualityDefinition;
obj[mapped.AVError.STREAM_SOUNDSHARE_FAILED] = AVErrorStreamSoundshareFailedDefinition.AVErrorStreamSoundshareFailedDefinition;
obj[mapped.AVError.STREAM_FAILED_TO_START] = AVErrorStreamFailedToStartDefinition.AVErrorStreamFailedToStartDefinition;
obj[mapped.AVError.STREAM_RECONNECTING] = AVErrorStreamReconnectingDefinition.AVErrorStreamReconnectingDefinition;
obj[mapped.AVError.SCREENSHARE_OS_ERROR] = AVErrorScreenshareOSErrorDefinition.AVErrorScreenshareOSErrorDefinition;
obj[mapped.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = AVErrorAudioCaptureSampleRateMismatchDefinition.AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[mapped.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = AVErrorVideoStreamSenderReadyTimeoutDefinition.AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[mapped.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = AVErrorVideoStreamReceiverReadyTimeoutDefinition.AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[mapped.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition.AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[mapped.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition.AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[mapped.AVError.CAMERA_SEND_LOW_FPS] = AVErrorCameraSendLowFPSDefinition.AVErrorCameraSendLowFPSDefinition;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;