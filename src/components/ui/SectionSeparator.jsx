

const SectionSeparator = () => {
    return (

        <div className="bg-[#0a0a0a] py-10 flex items-center justify-center">
            <div

                className="h-[1px] bg-gradient-to-r w-[80%] from-transparent via-stone-800 to-transparent relative flex items-center justify-center"
            >
                {/* Detalhe central: Um ponto ou losango minúsculo */}
                <div className="w-1 h-1 bg-stone-700 rotate-45" />
            </div>
        </div>

    )
}

export default SectionSeparator