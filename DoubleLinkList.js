const { LNode } = require('./ListNode')

class DoubleLinkList {

    constructor() {
        this.head = new LNode(null)
        this.tail = new LNode(null)
        this.count = 0
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    append(node) {
        const last = this.tail.prev
        last.next = node
        node.prev = last
        node.next = this.tail
        this.tail.prev = node
        this.count++
    }

    delete(index) {
        if (index > this.count - 1) return
        let p = this.get(index - 1)
        const next = p.next.next
        p.next = next
        next.prev = p
        this.count--
    }

    insert(node, index) {
        if (index > this.count - 1) {
            this.append(node)
        }
        let p = this.get(index - 1)
        const next = p.next
        p.next = node
        node.prev = p
        node.next = next
        next.prev = p
        this.count++
    }

    get(index) {
        if (index > this.count - 1) return
        if (index <= this.count / 2) {
            index += 1
            let p = this.head
            while (p && index) {
                p = p.next
                index--
            }
            return p
        } else {
            let p = this.tail
            let steps = this.count - index
            while (p && steps) {
                p = p.prev
                steps--
            }
            return p
        }
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
        draw.pop()
        draw.push('tail')
        console.log(draw.join(' -> '));
    }
}

module.exports = DoubleLinkList