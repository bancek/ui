import * as React from 'react';

export type EventKey = string | number;

export type AssignProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  keyof P
> &
  P;

export interface DynamicRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<AssignProps<As, { as?: As } & P>>,
    context?: any,
  ): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export class DynamicComponent<
  As extends React.ElementType,
  P = unknown
> extends React.Component<AssignProps<As, { as?: As } & P>> {}

// Need to use this instead of typeof Component to get proper type checking.
export type DynamicComponentClass<
  As extends React.ElementType,
  P = unknown
> = React.ComponentClass<AssignProps<As, { as?: As } & P>>;

export type SelectCallback = (
  eventKey: string | null,
  e: React.SyntheticEvent<unknown>,
) => void;

export interface TransitionCallbacks {
  onEnter?(node: HTMLElement): any;
  onEntered?(node: HTMLElement): any;
  onEntering?(node: HTMLElement): any;
  onExit?(node: HTMLElement): any;
  onExited?(node: HTMLElement): any;
  onExiting?(node: HTMLElement): any;
}

export type TransitionComponent = React.ComponentType<
  {
    in?: boolean;
    appear?: boolean;
    children: React.ReactElement;
  } & TransitionCallbacks
>;

export type TransitionType = boolean | TransitionComponent;
