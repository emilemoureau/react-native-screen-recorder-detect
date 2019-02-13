//
//  ScreenRecorder.h
//  ScreenRecorder
//
//  Created by emilemoureau on 12/02/2019.
//
//  ScreenRecordingDetector -> Created by Abhilash on 29/12/17.
//  Twitter: @abhilashkm1992
//

#import "React/RCTBridgeModule.h"

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

extern NSString *kScreenRecordingDetectorRecordingStatusChangedNotification;

@interface ScreenRecordingDetector : NSObject

+(instancetype)sharedInstance;
+ (void)triggerDetectorTimer;
+ (void)stopDetectorTimer;
- (BOOL)isRecording;

@end

@interface ScreenRecorderGang : NSObject <RCTBridgeModule>
@end
