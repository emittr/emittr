export type EventName = string | symbol;
export type EventListener = (name: EventName, data: any) => void;

export interface IEventDispatcher {
	/**
	 * Register a listener with the dispatcher.
	 */
	listen(event: EventName, listener: EventListener): () => void;

	/**
	 * Register many listeners with the dispatcher.
	 */
	listenMany(events: [EventName, EventListener][]): () => void;

	/**
	 * Remove a listener from the dispatcher.
	 */
	forget(event: EventName, listener: EventListener): void;

	/**
	 * Remove many listeners from the dispatcher.
	 */
	forgetMany(event: EventName): void;

	/**
	 * Get all of the listeners for a given event name.
	 */
	getListeners(event?: EventName): EventListener[];

	/**
	 * Determine if a given event has listeners.
	 */
	has(event: EventName): boolean;

	/**
	 * Fire an event and call the listeners in asynchronous order.
	 */
	dispatch(event: EventName): Promise<void>;

	/**
	 * Fire an event and call the listeners in sequential order.
	 */
	dispatchSeq(event: EventName): Promise<void>;

	/**
	 * Fire an event and call the listeners in synchronous order.
	 */
	dispatchSync(event: EventName): void;

	/**
	 * Fire many events and call the listeners in asynchronous order.
	 */
	dispatchMany(events: Record<EventName, EventListener>): Promise<void>;

	/**
	 * Fire many events and call the listeners in sequential order.
	 */
	dispatchManySeq(events: Record<EventName, EventListener>): Promise<void>;

	/**
	 * Fire many events and call the listeners in synchronous order.
	 */
	dispatchManySync(events: Record<EventName, EventListener>): void;
}
