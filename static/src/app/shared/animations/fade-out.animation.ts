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

export function fadeOutAnimation(): AnimationTriggerMetadata {
  return trigger('fadeOut', [
    transition(':leave', [   // :leave is alias to '* => void'
      animate(600, style({opacity: 0}))
    ])
  ])
}
