export const text = {
  answerKeyPoints: `### CSS 盒模型的理解
  CSS 盒模型是描述 HTML 元素在页面布局中的表现方式的基本概念。每个 HTML 元素都被视为一个矩形的盒子，这个盒子包括内容区域、内边距、边框和外边距。
  
  #### 组成部分
  1. **内容区域（Content Area）**：包含元素的实际内容，如文本、图片等。其大小可以通过 \`width\` 和 \`height\` 属性设置。
  2. **内边距（Padding）**：内容区域与边框之间的空间。可以通过 \`padding\` 属性设置。
  3. **边框（Border）**：围绕内容区域和内边距的线条。可以通过 \`border\` 属性设置。
  4. **外边距（Margin）**：边框与相邻元素之间的空间。可以通过 \`margin\` 属性设置。
  
  #### 盒模型的类型
  1. **标准盒模型（Content-box）**：默认盒模型。元素的宽度和高度仅包括内容区域。
  2. **替代盒模型（Border-box）**：通过设置 \`box-sizing: border-box;\`，元素的宽度和高度包括内容区域、内边距和边框。
  
  #### 优点与应用
  - **标准盒模型**：适用于需要精确控制内容区域大小的场景。
  - **替代盒模型**：适用于需要简化布局计算的场景，特别是在响应式设计中。
  
  #### 总结
  理解 CSS 盒模型对于掌握网页布局至关重要。通过合理设置盒模型的各个部分，可以实现灵活且精确的页面设计。
  `,
  dialogueQA: [
    {
      interviewer: '你能简单说一下 CSS 盒模型的基本概念吗？',
      candidate: 'CSS 盒模型是描述 HTML 元素在页面布局中的表现方式的基本概念。每个 HTML 元素都被视为一个矩形的盒子，这个盒子包括内容区域、内边距、边框和外边距。',
    },
    {
      interviewer: '盒模型包括哪些主要部分？',
      candidate: '盒模型包括内容区域、内边距、边框和外边距。内容区域包含元素的实际内容，内边距是内容区域与边框之间的空间，边框是围绕内容区域和内边距的线条，外边距是边框与相邻元素之间的空间。',
    },
    {
      interviewer: '盒模型有哪些类型？',
      candidate: '盒模型有两种类型：标准盒模型（Content-box）和替代盒模型（Border-box）。标准盒模型中，元素的宽度和高度仅包括内容区域；替代盒模型中，元素的宽度和高度包括内容区域、内边距和边框。',
    },
    {
      interviewer: '替代盒模型有什么优点？',
      candidate: '替代盒模型的优点在于简化了布局计算，特别是在响应式设计中。通过设置 `box-sizing: border-box;`，可以更直观地控制元素的实际大小，而不需要手动计算内边距和边框的额外空间。',
    },
  ],
  extension: {
    expansionOfKnowledgePoints: `1. **盒模型的应用场景**：
     - 在设计响应式布局时，替代盒模型（Border-box）可以简化计算，使布局更加直观。
     - 在需要精确控制内容区域大小的场景中，标准盒模型（Content-box）更为适用。
  
  2. **盒模型与布局的关系**：
     - 盒模型是 CSS 布局的基础，理解盒模型的各个部分对于实现复杂的布局至关重要。
     - 通过合理设置盒模型的各个属性，可以实现灵活且精确的页面设计。
  
  3. **盒模型的常见问题与解决方法**：
     - 常见问题包括盒模型导致的布局溢出或重叠。解决方法包括合理设置 \`margin\` 和 \`padding\`，以及使用 \`box-sizing: border-box;\` 简化布局计算。
     `,

    relatedInterviewQuestionsAndAnswers: `1. **什么是 CSS 盒模型？**
     - CSS 盒模型是描述 HTML 元素在页面布局中的表现方式的基本概念。每个 HTML 元素都被视为一个矩形的盒子，这个盒子包括内容区域、内边距、边框和外边距。
  
  2. **盒模型包括哪些主要部分？**
     - 盒模型包括内容区域、内边距、边框和外边距。内容区域包含元素的实际内容，内边距是内容区域与边框之间的空间，边框是围绕内容区域和内边距的线条，外边距是边框与相邻元素之间的空间。
  
  3. **盒模型有哪些类型？**
     - 盒模型有两种类型：标准盒模型（Content-box）和替代盒模型（Border-box）。标准盒模型中，元素的宽度和高度仅包括内容区域；替代盒模型中，元素的宽度和高度包括内容区域、内边距和边框。
  
  4. **替代盒模型有什么优点？**
     - 替代盒模型的优点在于简化了布局计算，特别是在响应式设计中。通过设置 \`box-sizing: border-box;\`，可以更直观地控制元素的实际大小，而不需要手动计算内边距和边框的额外空间。
  
  5. **如何设置替代盒模型？**
     - 可以通过设置 \`box-sizing: border-box;\` 来启用替代盒模型。例如：
       \`\`\`css
       * {
         box-sizing: border-box;
       }
       \`\`\`
     `,
  },
}
