const { LNode } = require('./ListNode')

class LinkList {

    constructor() {
        this.head = new LNode(null)
        this.count = 0
    }

    append(node) {
        let p = this.head
        while (p.next) {
            p = p.next
        }
        p.next = node
        this.count++
    }

    delete(index) {
        if (index > this.size() - 1) return
        let p = this.get(index - 1)
        const next = p.next
        p.next = p.next.next
        next.next = null
        this.count--
    }

    get(index) {
        if (index > this.size() - 1) return
        let p = this.head
        while (p && index + 1) {
            p = p.next
            index--
        }
        return p
    }

    insert(node, index) {
        if (index > this.size() - 1) return
        let p = this.get(index - 1)
        const next = p.next
        p.next = node
        node.next = next
        this.count++
    }

    size() {
        return this.count
    }

    paint() {
        let draw = ['head']
        let p = this.head.next
        while (p) {
            draw.push(p.value)
            p = p.next
        }
        console.log(draw.join(' -> '));
    }

}

module.exports = LinkList