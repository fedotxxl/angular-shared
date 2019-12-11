import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

export function fadeInOutAnimation(): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity: 0}),
      animate(250, style({opacity: 1}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(250, style({opacity: 0}))
    ])
  ])
}
