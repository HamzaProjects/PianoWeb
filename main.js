function music(note)
{
    pianoNote = "note" + note + ".wav"
    sound = new Audio(pianoNote);
    sound.play();
}