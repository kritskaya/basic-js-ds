const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.rootNode = new Node(null);
	}
	root() {
		return this.rootNode.data ? this.rootNode : null;
	}

	add(data) {
		if (!this.rootNode.data) {
			this.rootNode.data = data;
			return;
		}

		let current = this.rootNode;

		while(true) {
			if (data > current.data) {
				if (current.right) {
					current = current.right;
				} else {
					current.right = new Node(data);
					return;
				}
			} else {
				if (current.left) {
					current = current.left;
				} else {
					current.left = new Node(data);
					return;
				}
			}
		}
	}

	has(data) {
		return this.find(data) ? true : false;
	}

	find(data) {
		let current = this.rootNode;

		while (true) {
			if (current.data === data) return current;

			if (data > current.data) {
				if (current.right) {
					current = current.right;
				} else {
					return null;
				}
			} else {
				if (current.left) {
					current = current.left;
				} else {
					return null;
				}
			}
		}
	}

	findParent(data) {
		let current = this.rootNode;
		let parent = null;

		while (true) {
			if (current.data === data) return parent;

			if (data > current.data) {
				if (current.right) {
					parent = current;
					current = current.right;
				} else {
					return null;
				}
			} else {
				if (current.left) {
					parent = current;
					current = current.left;
				} else {
					return null;
				}
			}
		}
	}

	remove(data) {
		if (!this.rootNode.data || !this.rootNode) return;

		this.rootNode = this.removeNode(this.rootNode, data);
	}

	removeNode(node, data) {
		if (node.data === data) {
			
			if (!node.left && !node.right) return null;

			if (node.left && !node.right) return node.left;
			if (!node.left && node.right) return node.right;

			let minValue = this.minInNode(node.right);
			let minNode = this.find(minValue);

			node.data = minValue;
			node.right = this.removeNode(node.right, data);
			return node;
		} 

		if (data < node.data) {
			if (!node.left) return node;

			node.left = this.removeNode(node.left, data);
			return node;
		}

		if (data > node.data) {
			if (!node.right) return node;

			node.right = this.removeNode(node.right, data);
			return node;
		}
	}

	min() {
		if (!this.rootNode || !this.rootNode.data) return null;

		let current = this.rootNode;

		while(current.left) {
			current = current.left;
		}

		return current.data;
	}

	minInNode(node) {
		let current = node;

		while (current.left) {
			current = current.left;
		}

		return current.data;
	}

	max() {
		if (!this.rootNode) return null;

		let current = this.rootNode;

		while (current.right) {
			current = current.right;
		}

		return current.data;
	}
}


module.exports = {
	BinarySearchTree
};