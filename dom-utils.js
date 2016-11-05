var $ = {
	
	
	/**
	 * wrapper for `querySelector`
	 * @param {String} selector (class or id `selector`)
	 * @return {Node}     (first Node that matches `selector`)
	 */
	select (selector) {
		var result = document.querySelector(selector);
		return result
	},
	
	
	/**
	 * wrapper for `querySelectorAll`
	 * @param {String} selector (class or id `selector`)
	 * @return {Array[Node]}     (Array of all Nodes matching `selector`)
	 */
	selectAll (selector) {
		var result = document.querySelectorAll(selector);
		return result
	},
	
	
	/**
	 * calls a function for each element matching `selector`
	 * @param {String} selector (class or id selector)
	 * @param {Function} cb (el [, args])
	 * @param {???} args (???)
	 * @return 
	 */
	each (selector, cb, args) {
		this.selectAll(selector).forEach((el) => {
			cb(el, args)
		})
	},
	
	
	/**
	 * attatch an event listener to an element
	 * @param {Node} el (element to attatch event to)
	 * @param {String} type (type of event to listen to)
	 * @param {Function} handler (event)
	 * @return
	 */
	addEvent (el, type, handler) {
		if (el.attachEvent) {
			el.attachEvent('on'+type, handler);
		} else {
			el.addEventListener(type, handler);
		}
	},
	
	
	/**
	 * calls event handler when an event triggers for any current or future children of `context`
	 * @param {String} selector (selector to listen for events on)
	 * @param {String} event (type of event to listen to)
	 * @param {Function} callback (???, event)
	 * @param {Node} context (some parent element (defaults to document))
	 * @return 
	 */
	delegateEvent (selector, event, callback, context) {
		this.addEvent(context || document, event, function(e) {
			var el = e.target || e.srcElement;
			var eventTarget = el && el.closest(selector)
			eventTarget && callback.call(eventTarget, e)
		});
	},
	
	
	/**
	 * adds a class to an element
	 * @param {Node} element (element to add class to)
	 * @param {String} className (class to add)
	 * @return {Node} (returns the element that was passed in)
	 */
	addClass (element, className) {
		element.classList.add(className)
		return element
	},
	
	
	/**
	 * removes a class from an element
	 * @param {Node} element (element to remove class from)
	 * @param {String} className (class to remove)
	 * @return {Node} (returns the element that was passed in)
	 */
	removeClass (element, className) {
		element.classList.remove(className)
		return element
	}
	
}
