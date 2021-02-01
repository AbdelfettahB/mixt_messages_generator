let randomIndex = Math.floor(Math.random() * 4);
const messages = {
  quranMessages: [
    "“Guide Us To The Straight Path”",
    "“….so whenever guidance comes to you from Me, then whoever follows my guidance, then there will neither be any fear on them nor will they grieve.”",
    "“So remember Me; I will remember you”",
    "“Wherever you may be, death will overtake you, even if you should be within towers of lofty construction.”",
  ],
  sunnaMessages: [
    "“The best among you is the one who doesn’t harm others with his tongue and hands.”",
    " “The greatest of richness is the richness of the soul.”",
    "“No two things have been combined better than knowledge and patience.”",
    "“A kind word is a form of charity.”",
  ],
  mixtMessages() {
    console.log(this.quranMessages[randomIndex]);
    console.log(this.sunnaMessages[randomIndex]);
  },
};

messages.mixtMessages();
