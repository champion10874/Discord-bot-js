const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rate")
    .setDescription("Who?")
    .addStringOption((option) =>
      option
        .setName("u-name")
        .setDescription("The name to rate.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const commandName = interaction.options
      .getString("u-name", true)
      .toLowerCase();

    if (commandName === "john") {
      await interaction.reply("Oops!");
    } else {
      await interaction.reply("Excellent!");
    }
  },
};
