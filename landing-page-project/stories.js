// Get arrow elements and story cards
const leftArrow = document.querySelector(
  ".storiesContentLeft .arrows .arrow:first-child"
);
const rightArrow = document.querySelector(
  ".storiesContentLeft .arrows .arrow:last-child"
);
const storyCards = document.querySelectorAll(".storyCard");
const storiesContentRight = document.querySelector(".storiesContentRight");

let currentIndex = 0;

const firstCard = storyCards[0];
const cardWidth =
  firstCard.getBoundingClientRect().width +
  parseFloat(getComputedStyle(firstCard).marginRight || 0);

let lastDirection = null;

function updatePosition() {
  storiesContentRight.style.marginLeft = `-${currentIndex * cardWidth}px`;
}

function move(dir) {
  // Disallow same-direction consecutive clicks
  if (lastDirection === dir) return;

  const prevIndex = currentIndex;

  if (dir === "left" && currentIndex > 0) {
    currentIndex--;
  } else if (dir === "right" && currentIndex < storyCards.length - 1) {
    currentIndex++;
  } else {
    return;
  }

  updatePosition();

  if (currentIndex !== prevIndex) lastDirection = dir;
}

leftArrow.addEventListener("click", () => move("left"));
rightArrow.addEventListener("click", () => move("right"));

updatePosition();

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("storyModal");
  const modalContent = document.getElementById("modalStoryContent");
  const closeBtn = document.querySelector(".modal .close");

  const stories = [
    {
      title: "Old But Gold",
      content: `
        When we first met him, he was nothing more than skin and bones, wandering the streets with cloudy eyes and a slow, tired walk. 
        Most people overlooked him because of his age, but to us, he was perfect. 
        The shelter told us he had been abandoned when his family moved away, left to fend for himself for months.  
        We brought him home, unsure how long he had left — but in just a few weeks, his tail wagged at every greeting, 
        his appetite returned, and he rediscovered the joy of curling up on a warm couch.  
        He may be old, but every single day he proves that love has no age limit.  
        Our home feels brighter, our hearts fuller, and our lives forever changed.`,
    },
    {
      title: "Maya's Rescue",
      content: `
        Maya was found hiding under a broken tricycle, soaked from the rain and trembling with fear. 
        Her fur was matted, her ribs showed, and her eyes carried the weight of a thousand lonely nights.  
        At first, she wouldn&apos;t come near anyone — every sudden movement made her flinch.  
        But slowly, day by day, she began to trust.  
        The first time she wagged her tail, it was like the sun breaking through the clouds.  
        Now, she greets us at the door with excited barks, follows us around like a shadow, and curls up beside us every night.  
        I never planned to adopt, but Maya reminded me that sometimes, the family you need is the one you never expected to find.  
        She didn&apos;t just find a home — she found her people. And in the process, she rescued me too.`,
    },
    {
      title: "Family Found",
      content: `
        She was spotted limping across a busy street, narrowly avoiding speeding cars.  
        We rushed to scoop her up and take her to the vet, where we learned she had an injured paw and was severely underweight.  
        For weeks, she wore a tiny cast and slept curled up in blankets, finally able to rest without fear.  
        The transformation was nothing short of magical — her playful side emerged, she learned to chase toys, 
        and her purrs became the soundtrack to our evenings.  
        Today, she spends her days perched by the window, watching birds, and her nights snuggled between us on the bed.  
        Saving her wasn&apos;t just an act of kindness — it was the start of a lifelong bond.  
        She&apos;s no longer a stray; she&apos;s our daughter in fur, and our family feels complete with her here.`,
    },
  ];

  document.querySelectorAll(".readStory").forEach((btn, index) => {
    btn.addEventListener("click", function () {
      modalContent.innerHTML = `
        <h2>${stories[index].title}</h2>
        <p>${stories[index].content}</p>
      `;
      modal.style.display = "block";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close when clicking outside modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
