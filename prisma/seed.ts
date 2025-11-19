import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seeding...')

  // Create sample DSA problems
  const dsaProblems = [
    {
      title: 'Two Sum',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      difficulty: 'Easy',
      topics: ['Array', 'Hash Table'],
      testCases: [
        {
          input: '[2,7,11,15], 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        },
        {
          input: '[3,2,4], 6',
          output: '[1,2]',
          explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
        }
      ],
      solution: {
        approach: 'Hash Table',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        code: {
          javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
          python: `def twoSum(nums, target):
    hashmap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hashmap:
            return [hashmap[complement], i]
        hashmap[num] = i
    return []`
        }
      },
      hints: [
        'Think about using a hash map to store previously seen numbers',
        'Can you solve this in one pass through the array?',
        'Remember to check for the complement before adding the current number to the map'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    {
      title: 'Valid Parentheses',
      description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
      difficulty: 'Easy',
      topics: ['String', 'Stack'],
      testCases: [
        {
          input: '"()"',
          output: 'true',
          explanation: 'The parentheses are properly closed.'
        },
        {
          input: '"()[]{}"',
          output: 'true',
          explanation: 'All brackets are properly closed.'
        },
        {
          input: '"(]"',
          output: 'false',
          explanation: 'The brackets are not properly closed.'
        }
      ],
      solution: {
        approach: 'Stack',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        code: {
          javascript: `function isValid(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}`,
          python: `def isValid(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in pairs.values():
            stack.append(char)
        else:
            if not stack or stack.pop() != pairs[char]:
                return False

    return len(stack) == 0`
        }
      },
      hints: [
        'Use a stack to keep track of opening brackets',
        'When you see a closing bracket, make sure it matches the last opening bracket',
        'The string is valid if the stack is empty at the end'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    {
      title: 'Binary Tree Inorder Traversal',
      description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
      difficulty: 'Easy',
      topics: ['Tree', 'Depth-First Search', 'Binary Tree'],
      testCases: [
        {
          input: '[1,null,2,3]',
          output: '[1,3,2]',
          explanation: 'Inorder traversal visits left subtree, root, then right subtree.'
        }
      ],
      solution: {
        approach: 'Recursive DFS',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        code: {
          javascript: `function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return result;
}`,
          python: `def inorderTraversal(root):
    result = []

    def traverse(node):
        if not node:
            return

        traverse(node.left)
        result.append(node.val)
        traverse(node.right)

    traverse(root)
    return result`
        }
      },
      hints: [
        'Inorder traversal follows: left -> root -> right',
        'You can solve this recursively or iteratively',
        'For the iterative approach, use a stack to simulate recursion'
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h)'
    }
  ]

  // Insert DSA problems
  console.log('Creating DSA problems...')
  for (const problem of dsaProblems) {
    await prisma.dSAProblem.create({
      data: problem
    })
  }

  // Create sample interview questions
  const interviewQuestions = [
    {
      category: 'technical',
      role: 'SDE',
      difficulty: 'Easy',
      question: 'What is the difference between Array and ArrayList in Java?',
      expectedAnswer: 'Array is a fixed-length data structure while ArrayList is dynamic. Array can hold primitives and objects, while ArrayList can only hold objects. Array has better performance for fixed-size data.',
      keywords: ['array', 'arraylist', 'fixed', 'dynamic', 'performance'],
      followUpQuestions: [
        'When would you choose Array over ArrayList?',
        'What is the time complexity of operations in ArrayList?',
        'How does ArrayList handle resizing?'
      ]
    },
    {
      category: 'behavioral',
      role: 'SDE',
      difficulty: 'Medium',
      question: 'Tell me about a time when you had to deal with a difficult team member.',
      expectedAnswer: 'Focus on conflict resolution, communication, finding common ground, maintaining professionalism, and achieving project goals.',
      keywords: ['conflict', 'communication', 'teamwork', 'professionalism', 'resolution'],
      followUpQuestions: [
        'What was the outcome?',
        'What did you learn from this experience?',
        'How do you prevent similar situations?'
      ]
    },
    {
      category: 'system_design',
      role: 'SDE',
      difficulty: 'Hard',
      question: 'Design a URL shortening service like bit.ly',
      expectedAnswer: 'Key components: URL storage, hash generation, redirect service, analytics, load balancing, caching, database design.',
      keywords: ['url', 'shortening', 'hash', 'redirect', 'caching', 'database'],
      followUpQuestions: [
        'How would you handle collisions?',
        'What database would you use?',
        'How would you scale this system?'
      ]
    }
  ]

  // Insert interview questions
  console.log('Creating interview questions...')
  for (const question of interviewQuestions) {
    await prisma.interviewQuestionBank.create({
      data: question
    })
  }

  console.log('Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })